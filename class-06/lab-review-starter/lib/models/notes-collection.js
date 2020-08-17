const NotesModel = require('./notes-schema.js');

class NotesCollection {

  create(info) {

    let note = new NotesModel(info);

    return note.save();
  }

  delete(id) {
    return NotesModel.findByIdAndDelete(id);

    // TODO: render the text below in index.js
    //     .then(() => console.log('Deleted Note', id));
    //   return;
  }

  get(query) {
    return NotesModel.find(query);
  }

}

module.exports = NotesCollection;

