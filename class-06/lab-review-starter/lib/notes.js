'use strict';

const NotesCollection = require('./models/notes-collection.js');

class Notes {

  constructor() {
    this.collection = new NotesCollection();
  }

  async execute(opts) {
    switch (opts.action) {
    case 'add':
      return this.add(opts.payload, opts.category);
    case 'list':
      return this.list(opts.payload);
    case 'delete':
      return this.delete(opts.payload);
    default:
      return Promise.resolve();
    }
  }

  add(text, category) {
    return this.collection.create({ text, category });
  }

  list(category) {
    let query = category ? { category } : {};
    return this.collection.get(query);

  }

  async delete(id) {
    return this.collection.delete(id);
  }

}

module.exports = Notes;
