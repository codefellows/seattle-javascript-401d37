'use strict';

const base64 = require('base-64');

const User = require('../users-model.js');

module.exports = async (req, res, next) => {

  const errorObj = { status: 401, statusMessage: 'Unauthorized', message: 'Invalid User ID/Password' };

  // req.headers.authorization should be : "Basic sdkjdsljd="

  if (!req.headers.authorization) { next(errorObj); return; }

  // Pull out just the encoded part by splitting the header into an array on the space and popping off the 2nd element
  let encodedPair = req.headers.authorization.split(' ').pop();

  // decodes to user:pass and splits it to an array
  let [user, pass] = base64.decode(encodedPair).split(':');

  // Is this user ok?
  try {
    const validUser = await User.authenticateBasic(user, pass);

    req.token = validUser.generateToken();

    next();
  } catch (err) {
    next(errorObj);
  }

};
