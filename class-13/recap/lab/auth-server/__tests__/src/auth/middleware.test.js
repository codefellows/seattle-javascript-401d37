'use strict';

require('dotenv').config();
require('@code-fellows/supergoose');
const auth = require('../../../src/auth/basic-auth-middleware.js');
const User = require('../../../src/auth/users-model.js');

beforeAll(async () => {
  const adminUserData = { username: 'admin', password: 'password', role: 'admin', email: 'ad@min.com' };
  await User(adminUserData).save();
});

describe('user authentication', () => {

  let errorObject = { 'message': 'Invalid User ID/Password', 'status': 401, 'statusMessage': 'Unauthorized' };

  it('fails a login for a user (admin) with the incorrect basic credentials', async () => {

    // admin:foo: YWRtaW46Zm9v

    let req = {
      headers: {
        authorization: 'Basic YWRtaW46Zm9v',
      },
    };

    let res = {};

    let next = jest.fn();

    await auth(req, res, next);

    expect(next).toHaveBeenCalledWith(errorObject);

  });

  it('logs in an admin user with the right credentials', async () => {

    // admin:password: YWRtaW46cGFzc3dvcmQ=

    let req = {
      headers: {
        authorization: 'Basic YWRtaW46cGFzc3dvcmQ=',
      },
    };

    let res = {};

    let next = jest.fn();

    await auth(req, res, next);

    expect(next).toHaveBeenCalledWith();

  });

});
