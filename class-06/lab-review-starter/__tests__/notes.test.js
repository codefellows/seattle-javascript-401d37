'use strict';

require('@code-fellows/supergoose');

const Notes = require('../lib/notes.js');

const notes = new Notes();
jest.spyOn(notes, 'add');

const notesModel = require('../lib/models/notes-schema.js');


beforeEach(async () => {
  return notesModel.deleteMany({});
});

describe('Note Module', () => {

  it('execute() does nothing with invalid options', () => {
    return notes.execute({})
      .then(() => {
        expect(notes.add).not.toHaveBeenCalled();
      });
  });

  it('notes() can add a note', () => {
    const action = 'add';
    const payload = 'test note';
    return notes.execute({ action, payload })
      .then(results => {
        expect(notes.add).toHaveBeenCalled();
      });
  });

});

describe('List', () => {
  it('should return list of ALL notes when executing a list command with no category', async () => {

    await notes.execute({
      action: 'add',
      payload: 'first note',
    });

    await notes.execute({
      action: 'add',
      payload: 'second note',
    });

    const list = await notes.execute({
      action: 'list',
    });

    expect(list.length).toBe(2);

    expect(list[0].text).toBe('first note');
    expect(list[1].text).toBe('second note');

  });

  describe('Delete', () => {
    it('should delete with good id', async () => {
      const note = await notes.execute({
        action: 'add',
        payload: 'first note',
      });

      const result = await notes.execute({
        action: 'delete',
        payload: note._id,
      });

      expect(result._id).toBe(note._id);


    });
  })
});
