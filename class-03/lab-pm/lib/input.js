'use strict';

const minimist = require('minimist');

class Input {

    constructor() {
        const args = minimist(process.argv.slice(2));
        this.command = this.parse(args);
    }

    parse(args) {

        const argsMap = {
            a: 'add',
            add: 'add',
            list: 'list',
            l: 'list',
            d: 'delete',
            delete: 'delete',
        };

        const theSwitch = Object.keys(args).find(key => argsMap[key]);

        const category = args.c || args.category;

        const action = argsMap[theSwitch];

        const payload = typeof args[theSwitch] === 'string' ? args[theSwitch] : undefined;

        return {
            action, // same as action:action
            payload, // same as payload:payload
            category, // same as category: category
        };
    }

    valid() {
        // command must have an action
        // add should have payload
        // delete should have payload
        // list does not need a payload

        if (!this.command.action) { return false; }
        if (this.command.action == 'add') {
            if (!this.command.payload) {
                return false;
            }
        }
        if (this.command.action == 'delete') {
            if (!this.command.payload) {
                return false;
            }
        }

        return true;

    }
}

module.exports = Input;
