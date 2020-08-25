'use strict';

const base64 = require('base-64');

const users = require('./users-model.js');

module.exports = async (req, res, next) => {

  // req.headers.authorization should be : "Basic alexw:sdkjdsljd="

  // Maybe have more robust error like this...
  // {'message': 'Invalid User ID/Password', 'status': 401, 'statusMessage': 'Unauthorized'}

  if (!req.headers.authorization) { next('Invalid Login'); return; }

  // Pull out just the encoded part by splitting the header into an array on the space and popping off the 2nd element
  let basic = req.headers.authorization.split(' ').pop();

  // decodes to user:pass and splits it to an array
  let [user, pass] = base64.decode(basic).split(':');

  console.log('user pass', user, pass);

  // Is this user ok?

  const validUser = await users.authenticateBasic(user, pass);

  if (validUser) {
    const token = validUser.generateToken();

    req.token = token;

    next();

  } else {

    next({ 'message': 'Invalid User ID/Password', 'status': 401, 'statusMessage': 'Unauthorized' });
  }
};
