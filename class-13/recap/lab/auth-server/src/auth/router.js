'use strict';

const express = require('express');
const authRouter = express.Router();

const User = require('./users-model.js');
const auth = require('./basic-auth-middleware.js');
const oauthMiddleware = require('./middleware/oauth.js');

authRouter.post('/signup', async (req, res, next) => {

  try {

    const user = await new User(req.body).save();

    req.token = user.generateToken();

    res.send({
      token: req.token,
      user: req.user,
    });

  } catch (err) {

    next(err);
  }

});

authRouter.post('/signin', auth, (req, res, next) => {
  res.cookie('auth', req.token);
  res.set('token', req.token);

  res.send({
    token: req.token,
    user: req.user,
  });
});

authRouter.get('/oauth', oauthMiddleware, (req, res, next) => {
  res.status(200).send(req.token);
});

module.exports = authRouter;
