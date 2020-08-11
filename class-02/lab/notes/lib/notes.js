'use strict';

function Notes(opts) {
    this.action = opts.command.action;
    this.payload = opts.command.payload;
}


// This could be done in a one-liner
// this[this.action](this.payload);
// ... But since this pattern resembles a redux reducer, lets teach on that.
Notes.prototype.execute = function () {

    switch (this.action) {
        case 'add':
            this.add(this.payload);
            break;
        default:
            break;
    }
};

Notes.prototype.add = function (payload) {
    console.log(`Adding Note: ${payload}`);
};

module.exports = Notes;
