'use strict';

const minimist = require('minimist');

function Input() {
    const args = minimist(process.argv.slice(2));
    this.command = this.parse(args);
}

Input.prototype.parse = function (args) {

    let argsMap = {
        a: 'add',
        add: 'add',
    };

    let arg = Object.keys(args).filter(arg => argsMap[arg])[0];

    return {
        action: argsMap[arg],
        payload: args[arg],
    };
};

Input.prototype.valid = function () {
    // STRETCH - explain this code
    // NOTE: don't use this if you don't understand it. Write it yourself in way that you do
    return !!(this.command.action && this.command.payload);
};

module.exports = Input;
