const NotesModel = require('./notes-schema.js');

class NotesCollection {

  create(info) {

    let note = new NotesModel(info);

    return note.save();
  }

  async delete(id) {

    try {
      return await NotesModel.findByIdAndDelete(id);
    } catch (err) {
      return Promise.resolve(false);
    }
  }

  get(query) {
    return NotesModel.find(query);
  }

}

module.exports = NotesCollection;

