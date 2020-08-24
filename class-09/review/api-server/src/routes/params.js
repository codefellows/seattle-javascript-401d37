'use strict';

const products = require('../models/products.js');
const categories = require('../models/categories.js');

function getModel(req, res, next) {

  const modelMap = {
    'products' : products,
    'categories' : categories,
  };

  const model = modelMap[req.params.model];

  if (model) {

    req.model = model;

    next();

  } else {

    next('Invalid Model');
  }
}

module.exports = getModel;
