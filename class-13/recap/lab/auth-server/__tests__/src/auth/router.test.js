'use strict';

require('dotenv').config();

const jwt = require('jsonwebtoken');

const server = require('../../../src/app.js').server;
const supergoose = require('@code-fellows/supergoose');

const mockRequest = supergoose(server);

let users = {
  admin: { username: 'admin', password: 'password', role: 'admin' },
  editor: { username: 'editor', password: 'password', role: 'editor' },
  user: { username: 'user', password: 'password', role: 'user' },
};

describe('Auth Router', () => {

  Object.keys(users).forEach(userType => {

    describe(`${userType} users`, () => {

      let id;

      it('can create one', async () => {

        const results = await mockRequest.post('/signup').send(users[userType]);

        const token = jwt.verify(results.body.token, process.env.JWT_SECRET);

        id = token.id;

        expect(token.id).toBeDefined();

      });

      it('can signin with basic', async () => {

        const { username } = users[userType];
        const { password } = users[userType];

        const results = await mockRequest
          .post('/signin').auth(username, password);

        const token = jwt.verify(results.body.token, process.env.JWT_SECRET);

        expect(token.id).toEqual(id);

        expect(token.role).toBe(userType);

      });
    });
  });
});
