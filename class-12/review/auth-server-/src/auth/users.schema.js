'use strict';

const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const users = mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String },
  fullname: { type: String },
  role: { type: String, enum: ['admin', 'editor', 'writer', 'user'], required: true },

});

users.pre('save', async function () {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 10);
  }
});

users.statics.authenticateBasic = async function (username, password) {
  let query = { username: username };
  const user = await this.findOne(query);
  if (user) {
    return await user.comparePassword(password);
  } else {
    return null;
  }
};

users.methods.comparePassword = async function (password) {
  const valid = await bcrypt.compare(password, this.password);
  return valid ? this : null;
};

users.statics.generateToken = function (user) {
  return jwt.sign({ username: user.username }, process.env.SECRET);
};

module.exports = mongoose.model('users', users);

