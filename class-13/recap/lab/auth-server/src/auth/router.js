'use strict';

const express = require('express');
const authRouter = express.Router();

const User = require('./users-model.js');
const auth = require('./basic-auth-middleware.js');
const oauthMiddleware = require('./middleware/oauth.js');

authRouter.post('/signup', async (req, res, next) => {

  // TODO

});

authRouter.post('/signin', auth, (req, res, next) => {
  // TODO
});

authRouter.get('/oauth', oauthMiddleware, (req, res, next) => {
  // TODO
});

module.exports = authRouter;
