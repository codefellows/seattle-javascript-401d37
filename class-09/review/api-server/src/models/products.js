const BaseModel = require('./model');
const schema = require('./products.schema.js');

class Products extends BaseModel { }

module.exports = new Products(schema);
