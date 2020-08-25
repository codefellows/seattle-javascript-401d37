'use strict';

require('dotenv').config();

const jwt = require('jsonwebtoken');
const server = require('../server.js').server;
const supergoose = require('@code-fellows/supergoose');

const mockRequest = supergoose(server);

describe(`users signup/in`, () => {

  it('can sign up', async () => {

    const userData = { username: 'admin', password: 'password', role: 'admin', email: 'admin@admin.com' };

    const results = await mockRequest.post('/signup').send(userData);

    expect(results.statusCode).toBe(201);

  });

  it('can signin with basic', async () => {

    const userData = { username: 'janey', password: 'password', role: 'admin', email: 'admin@admin.com' };

    await mockRequest.post('/signup').send(userData);

    const results = await mockRequest.post('/signin').auth('janey', 'password');

    const token = JSON.parse(results.text).token;

    const verifiedToken = jwt.verify(token, process.env.SECRET);

    expect(verifiedToken).toBeDefined();

  });

  it('can fail signin with bad password', async () => {

    const userData = { username: 'joey', password: 'password', role: 'admin', email: 'admin@admin.com' };

    await mockRequest.post('/signup').send(userData);

    const results = await mockRequest.post('/signin').auth('joey', 'badpassword');

    expect(results.statusCode).toBe(401);

  });

  it('can fail signin with unknown user', async () => {

    const userData = { username: 'joey', password: 'password', role: 'admin', email: 'admin@admin.com' };

    await mockRequest.post('/signup').send(userData);

    const results = await mockRequest.post('/signin').auth('nobody', 'password');

    expect(results.statusCode).toBe(401);

  });

});

