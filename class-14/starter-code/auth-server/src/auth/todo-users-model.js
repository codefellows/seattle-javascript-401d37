'use strict';

const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const SINGLE_USE_TOKENS = false;// !!process.env.SINGLE_USE_TOKENS;
const TOKEN_EXPIRE = process.env.TOKEN_EXPIRE || '60m';
const SECRET = process.env.SECRET || 'supersecret';

const usedTokens = new Set();

/* Lab 14 - Note that capabilities is added */
const users = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  fullname: { type: String },
  email: { type: String },
  role: { type: String, default: 'user', enum: ['admin', 'editor', 'writer', 'user'] },
  capabilities: { type: Array, required: true, default: [] },
});

users.pre('save', async function () {

  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 10);
  }

  let role = this.role; // tweak as needed when testing

  // DANGER: REMOVE from live system
  // role = 'admin';

  /* Lab 14 - assign capabilities */
  if(this.isModified('role')) {

    switch (role) {
    case 'admin':
      this.capabilities = ['create', 'read', 'update', 'delete'];
      break;
    case 'editor':
      this.capabilities = ['create', 'read', 'update'];
      break;
    case 'writer':
      this.capabilities = ['create', 'read'];
      break;
    case 'user':
      this.capabilities = ['read'];
      break;
    }
  }
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
      let role = 'user'; // NOTE: change this role to test out different routes
      return this.create({ username, password, role });
    });

};

users.statics.authenticateToken = function (token) {

  /* Additional Security Measure */
  if (usedTokens.has(token)) {
    console.log('unique fail');
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

  /* Lab 14 - add capabilities */
  let token = {
    id: this._id,
    role: this.role,
    capabilities: this.capabilities,
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
