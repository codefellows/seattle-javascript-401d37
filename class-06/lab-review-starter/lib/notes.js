'use strict';

const notesModel = require('./models/notes-schema.js');

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

  async add(text, category) {
    return await this.collection.create({ text, category });
  }

  async list(category) {
    let query = category ? { category } : {};
    let notes = await notesModel.find(query);
    notes.forEach(note => {
      console.log(note.text);
      console.log('');
      console.log(`  Category: ${note.category}\t ID: ${note.id}`);
      console.log('--------------------------------------------------\n');
    });
    return;
  }

  async delete(id) {
    await notesModel.findByIdAndDelete(id)
      .then(() => console.log('Deleted Note', id));
    return;
  }

}

module.exports = Notes;
