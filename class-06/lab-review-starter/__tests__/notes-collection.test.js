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

  it('should create with no category given', async () => {
    const notesCollection = new NotesCollection();

    const noteData = { text: 'Generic note' };

    const note = await notesCollection.create(noteData);

    expect(note._id).toBeDefined();

    compareProps(noteData, note);

    expect(note.category).toBe('general');
  });

  it('should delete with good id', async () => {

    const notesCollection = new NotesCollection();

    const noteData = { text: 'Generic note' };

    const note = await notesCollection.create(noteData);

    await notesCollection.delete(note._id);

    const deletedNote = await notesCollection.get({ _id: note._id });

    expect(deletedNote).not.toBeUndefined();

  });

  it('should handle deleting unknown id', async () => {

    const notesCollection = new NotesCollection();

    const result = await notesCollection.delete('unknown id');

    expect(result).toBeFalsy();

  });

});

function compareProps(one, other) {
  for (const key in one) {
    expect(one[key]).toBe(other[key]);
  }
}
