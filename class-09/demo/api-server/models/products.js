'use strict';

const schema = require('./products-schema.js');
const DataModel = require('./model.js');

class Products extends DataModel {}

module.exports = new Products(schema);


// How can we specialize Products to have unique post but same get
// AND not mess up Food and Books
