'use strict';

require('@code-fellows/supergoose');

const Notes = require('../lib/notes.js');

const notes = new Notes();
jest.spyOn(notes, 'add');

describe('Note Module', () => {

    it('execute() does nothing with invalid options', () => {
        return notes.execute({})
            .then(() => {
                expect(notes.add).not.toHaveBeenCalled();
            })
    });

    it('notes() can add a note', () => {
        const action = 'add';
        const payload = 'test note';
        return notes.execute({ action, payload })
            .then(results => {
                expect(notes.add).toHaveBeenCalled();
            });
    });

    it('notes() can return a saved note', () => {
        const action = 'add';
        const payload = 'test note';
        return notes.execute({ action, payload })
            .then(savedNote => {
                expect(savedNote.category).toBe('general');
                expect(savedNote.text).toBe('test note');
            });
    });

});
