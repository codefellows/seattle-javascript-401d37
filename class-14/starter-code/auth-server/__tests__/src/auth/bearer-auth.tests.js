'use strict';

require('dotenv').config();
require('@code-fellows/supergoose');
const auth = require('../../../src/auth/middleware/bearer-auth.js');

it('should fail with missing headers', async () => {
  let req = {
    headers: {
      authorization: '',
    },
  };

  let res = {};

  let next = jest.fn();

  await auth(req, res, next);

  expect(next).toHaveBeenCalledWith('Invalid Login: Missing Headers');
});

it('should fail with bad token', async () => {
  let req = {
    headers: {
      authorization: 'Bearer bad.token.surely',
    },
  };

  let res = {};

  let next = jest.fn();

  await auth(req, res, next);

  expect(next).toHaveBeenCalledWith('Invalid Login');
});

it('should carry on with good token', async () => {

  // Can be convenient to store a TEST_TOKEN in environment
  // But you will have to refresh it (aka grab a new one) if/when it expires
 
  let req = {
    headers: {
      authorization: `Bearer ${process.env.TEST_TOKEN}`,
    },
  };

  let res = {};

  let next = jest.fn();

  await auth(req, res, next);

  expect(next).toHaveBeenCalledWith();

});