'use strict';

const superagent = require('superagent');
const users = require('../users-model.js');

/*
  Resources
  https://developer.github.com/apps/building-oauth-apps/
*/

const tokenServerUrl = process.env.GITHUB_TOKEN_SERVER;
const remoteAPI = process.env.GITHUB_REMOTE_API;
const CLIENT_ID = process.env.GITHUB_CLIENT_ID;
const CLIENT_SECRET = process.env.GITHUB_CLIENT_SECRET;
const API_SERVER = process.env.OAUTH_API_SERVER;

module.exports = async function authorize(req, res, next) {
  // TODO
}
