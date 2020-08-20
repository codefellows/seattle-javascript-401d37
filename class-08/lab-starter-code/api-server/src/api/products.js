'use strict';

const express = require('express');

const Products = require('../models/products/products.js');
const products = new Products();

const router = express.Router();

module.exports = router;
