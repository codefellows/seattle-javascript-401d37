'use strict';

require('@code-fellows/supergoose');
const auth = require('../src/auth/middleware.js');
const Users = require('../src/auth/users.schema.js');
require('dotenv').config();

beforeEach(async () => {
  await new Users({username: 'admin', password: 'password', role: 'admin', email:'admin@admin.com'}).save();
});

describe('Auth Middleware', () => {

  let errorObject = {'message': 'Invalid User ID/Password', 'status': 401, 'statusMessage': 'Unauthorized'};

  describe('user authentication', () => {

    it('fails a login for a user (admin) with the incorrect basic credentials', async () => {

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

      let req = {
        headers: {
          authorization: 'Basic YWRtaW46cGFzc3dvcmQ=',
        },
      };
      let res = {};
      let next = jest.fn();

      await auth(req,res,next);

      expect(next).toHaveBeenCalledWith();

    });

  });

});
