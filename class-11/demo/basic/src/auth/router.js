'use strict';

const express = require('express');
const router = express.Router();
const auth = require('./middleware.js');
const users = require('./users-model');

router.post('/signup', (req, res, next) => {
  // create a new User
  // save it
  // response ????

  const user = new users(req.body);

  user.save()
    .then(user => {
      let token = user.generateToken(user);
      res.status(200).send(token);
    })
    .catch(e => {
      console.error(e);
      res.status(403).send('Error Creating User');
    });
});

router.post('/signin', auth, (req, res, next) => {

  res.cookie('auth', req.token);
  res.send(req.token);

  /*
    res.send({
      token: req.token,
      user: req.user,
    })
  */

});

module.exports = router;
