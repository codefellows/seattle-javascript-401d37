'use strict';

const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const SECRET = process.env.JWT_SECRET;

const users = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  email: { type: String },
  role: { type: String, default: 'user', enum: ['admin', 'editor', 'user'] },
});

users.pre('save', async function () {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 10);
  }
});

users.statics.authenticateBasic = async function (username, password) {
  const user = await this.findOne({ username });

  return user && await user.comparePassword(password);

};

users.methods.comparePassword = async function (password) {
  const passwordMatch = await bcrypt.compare(password, this.password);
  return passwordMatch ? this : null;
};

/* Lab 13 : Note - changed from email to username */
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



/* Lab 13 - Modified Method */
// You might handle this differently BUT tests assume this style
// AND provided OAUTH example assumes it

users.methods.generateToken = function () {

  let token = {
    id: this._id,
    role: this.role,
  };

  let options = {};

  // /* Additional Security Measure */
  // if (!!TOKEN_EXPIRE) {
  //   options = { expiresIn: TOKEN_EXPIRE };
  // }

  return jwt.sign(token, SECRET, options);
};

/* Lab 13 new methods start */


users.statics.authenticateToken = function (token) {

  /* Additional Security Measure */
  // if (usedTokens.has(token)) {
  //   return Promise.reject('Invalid Token');
  // }

  let parsedToken = jwt.verify(token, SECRET);

  /* Additional Security Measure */
  // Add to the scrap heap if we are in "one use token mode"
  // if(SINGLE_USE_TOKENS) {
  //   usedTokens.add(token);
  // }

  return this.findById(parsedToken.id);

};


/* Lab 13 end */


module.exports = mongoose.model('users', users);
