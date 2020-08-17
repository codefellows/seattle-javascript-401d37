'use strict';

require('@code-fellows/supergoose');

const NotesCollection = require('../lib/models/notes-collection.js');

describe('Notes Collection', () => {

  it('should create - sunny day', async () => {

    const notesCollection = new NotesCollection();

    const noteData = { text: 'Celebrate victory', category: 'Reasons to celebrate' };

    const note = await notesCollection.create(noteData);

    expect(note._id).toBeDefined();

    compareProps(noteData, note);

  });

});

function compareProps(one, other) {
  for (const key in one) {
    expect(one[key]).toBe(other[key]);
  }
}