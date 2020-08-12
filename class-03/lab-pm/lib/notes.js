'use strict';

const NotesModel = require('./notes-schema.js');

class Notes {

    constructor() {
    }

    async execute(command) {

        // we need to check the command's action
        switch (command.action) {
            case 'add':
                return this.add(command.payload, command.category);
                break;
            case 'list':
                return this.list(command.category);
                break;
            case 'delete':
                return this.delete(command.payload);
                break;
            default:
                return Promise.resolve();
        }
    }

    async add(text, category) {

        const newNote = new NotesModel({ category, text });

        let saved = await newNote.save();

        return saved;
    }

    async list(category) {

    }

    async delete(id) {

    }

}

module.exports = Notes;
