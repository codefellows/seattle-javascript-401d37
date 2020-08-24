const BaseModel = require('./model');
const schema = require('./categories.schema.js');

class Categories extends BaseModel { }

module.exports = new Categories(schema);
