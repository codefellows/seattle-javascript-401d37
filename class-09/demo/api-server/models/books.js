'use strict';

const booksSchema = require('./books-schema.js');
const dataModel = require('./model.js');

class Books extends dataModel { }


module.exports = new Books(teamSchema);
