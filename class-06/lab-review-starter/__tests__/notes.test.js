'use strict';

require('@code-fellows/supergoose');

const Notes = require('../lib/notes.js');

const notes = new Notes();

const notesModel = require('../lib/models/notes-schema.js');

jest.spyOn(global.console, 'log');

beforeEach(async () => {
  return notesModel.deleteMany({});
});

afterEach(() => {
  jest.clearAllMocks();
});


it('should log properly after valid add', async () => {
  await notes.execute({ action: 'add', payload: 'test this out' });
  expect(console.log).toHaveBeenCalledWith('Note saved', 'test this out');
});

it('should delete with good id', async () => {

  const addedNote = await notes.execute({ action: 'add', payload: 'about to be deleted' });

  await notes.execute({ action: 'delete', payload: addedNote._id });

  expect(console.log).toHaveBeenCalledWith('Deleted note', addedNote._id.toString());

});
