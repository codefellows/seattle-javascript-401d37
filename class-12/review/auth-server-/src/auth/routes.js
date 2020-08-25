'use strict';
const express = require('express');
const router = express.Router();
const auth = require('./middleware.js');
const user = require('./users.schema.js');

router.post('/signup', (req, res, next) => {
  return user.create(req.body)
    .then(userInfo => {
      res.status(201).json(userInfo);
    });
});

router.post('/signin', auth, (req, res, next) => {
  res.cookie('auth', req.token);
  res.json({
    token: req.token,
    user: req.user,
  });
});

router.get('/users', (req, res, next) => {
  user.find()
    .then(info => {
      res.status(200).json(info);
    });
});

module.exports = router;
