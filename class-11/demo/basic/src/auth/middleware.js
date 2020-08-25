'use strict';

const base64 = require('base-64');

const users = require('./users-model.js');

module.exports = (req, res, next) => {

  // req.headers.authorization should be : "Basic alexw:sdkjdsljd="

  // Maybe have more robust error like this...
  // {'message': 'Invalid User ID/Password', 'status': 401, 'statusMessage': 'Unauthorized'}

  if (!req.headers.authorization) { next('Invalid Login'); return; }

  // Pull out just the encoded part by splitting the header into an array on the space and popping off the 2nd element
  let basic = req.headers.authorization.split(' ').pop();

  // decodes to user:pass and splits it to an array
  let [user, pass] = base64.decode(basic).split(':');

  // Is this user ok?

  users.authenticateBasic(user, pass)
    .then(validUser => {
      console.log('valid', validUser);
      req.token = users.generateToken(validUser);
      console.log('req.token', req.token);
      next();
    })
    .catch(err => next('Invalid Login'));

};
