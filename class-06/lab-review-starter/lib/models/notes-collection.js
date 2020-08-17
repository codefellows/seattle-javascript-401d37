const NotesModel = require('./notes-schema.js');

class NotesCollection {

  create(info) {

    let note = new NotesModel(info);

    return note.save();
  }

  delete() { }
  get() { }

}

module.exports = NotesCollection;

