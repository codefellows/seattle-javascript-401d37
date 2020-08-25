'use strict';

const base64 = require('base-64');

const users = require('./users.schema.js');

module.exports = async (req, res, next) => {

  if (!req.headers.authorization) { next({ 'message': 'Invalid User ID/Password', 'status': 401, 'statusMessage': 'Unathorized' }); return; }

  try {
    // Pull out just the encoded part by splitting the header into an array on the space and popping off the 2nd element
    let basic = req.headers.authorization.split(' ').pop();


    // decodes to user:pass and splits it to an array
    let [user, pass] = base64.decode(basic).split(':');

    // Is this user ok?
    const validUser = await users.authenticateBasic(user, pass);
    req.token = users.generateToken(validUser);
    req.user = user;
    next();

  } catch (e) {
    next({ 'message': 'Invalid User ID/Password', 'status': 401, 'statusMessage': 'Unauthorized' });
  }

};

