'use strict';

const mongoose = require('mongoose');

const products = mongoose.Schema({
  name: { type: String, required: true },
  // etc.
  // catgory: { type: Number, required: true },
  // type: { type: String, uppercase: true, enum: ['FRUIT', 'VEGETABLE', 'PROTIEN'] },
});

module.exports = mongoose.model('products', products);
