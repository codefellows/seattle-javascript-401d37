'use strict';

/* Lab 13 */

const express = require('express');

const router = express.Router();

router.get('/secret', (req,res) => {
  res.status(200).send('access allowed');
} );

module.exports = router;
