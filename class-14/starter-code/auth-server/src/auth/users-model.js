'use strict';

const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const SECRET = process.env.SECRET || 'supersecret';

/* Additional Security Measures */
const SINGLE_USE_TOKENS = false;// !!process.env.SINGLE_USE_TOKENS;
const TOKEN_EXPIRE = process.env.TOKEN_EXPIRE || '60m';
const usedTokens = new Set();

/* Lab 14 TODO
   Add capabilities field
   See todo-users-model.js for tips
*/
const users = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  fullname: { type: String },
  email: { type: String },
  role: { type: String, default: 'user', enum: ['admin', 'editor', 'writer', 'user'] },
});

users.pre('save', async function () {

  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 10);
  }

  /* Lab 14 TODO
   assign capabilities based on role
   See todo-users-model.js for tips
   */

});

users.statics.createFromOauth = function (username) {

  if (!username) { return Promise.reject('Validation Error'); }

  return this.findOne({ username })
    .then(user => {
      if (!user) { throw new Error('User Not Found'); }
      console.log('Welcome Back', user.username);
      return user;
    })
    .catch(error => {
      console.log('Creating new user');
      let password = 'phoneybaloney';
      return this.create({ username, password });
    });

};

users.statics.authenticateToken = function (token) {

  /* Additional Security Measure */
  if (usedTokens.has(token)) {
    return Promise.reject('Invalid Token');
  }

  try {

    let parsedToken = jwt.verify(token, SECRET);

    /* Additional Security Measure */
    (SINGLE_USE_TOKENS) && parsedToken.type !== 'key' && usedTokens.add(token);

    let query = { _id: parsedToken.id };
    return this.findOne(query);
  } catch (e) { throw new Error('Invalid Token'); }

};

users.statics.authenticateBasic = function (username, password) {
  let query = { username };
  return this.findOne(query)
    .then(user => user && user.comparePassword(password))
    .catch(error => { throw error; });
};

users.methods.comparePassword = function (password) {
  return bcrypt.compare(password, this.password)
    .then(valid => valid ? this : null);
};

users.methods.generateToken = function (type) {

  /* Lab 14 TODO - add capabilities */
  let token = {
    id: this._id,
    role: this.role,
  };

  /* Additional Security Measure */
  let options = {};
  if (type !== 'key' && !!TOKEN_EXPIRE) {
    options = { expiresIn: TOKEN_EXPIRE };
  }

  return jwt.sign(token, SECRET, options);
};


users.methods.generateKey = function () {
  return this.generateToken('key');
};

module.exports = mongoose.model('users', users);
