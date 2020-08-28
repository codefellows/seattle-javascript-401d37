'use strict';

/* Lab 13 */

const express = require('express');
const bearerAuthMiddleware = require('./auth/middleware/bearer-auth');
const router = express.Router();

router.get('/secret', bearerAuthMiddleware, (req,res) => {
  res.status(200).send('access allowed');
} );

module.exports = router;
