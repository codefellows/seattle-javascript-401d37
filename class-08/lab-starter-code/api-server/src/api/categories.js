'use strict';

const express = require('express');

const Categories = require('../models/categories/categories.js');
const categories = new Categories();

const router = express.Router();


module.exports = router;
