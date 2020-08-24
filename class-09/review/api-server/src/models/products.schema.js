const mongoose = require('mongoose');

const products = mongoose.Schema({
  name: { type: String, required: true },
  display_name: { type: String, required: true },
  category: { type: String, required: true },
  description: { type: String },
});

module.exports = mongoose.model('products', products);
