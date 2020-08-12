'use strict';

jest.mock('minimist');
const minimist = require('minimist');

minimist.mockImplementation(() => {
    return {
        a: 'This is a note',
    };
});

const Input = require('../lib/input.js');

describe('Parse add', () => {

    it('should parse -a with payload', () => {
        const input = new Input();
        const command = input.parse({ a: 'good payload' });
        expect(command.action).toBe('add');
        expect(command.payload).toBe('good payload');
    });

    it('should parse --add with payload', () => {
        const input = new Input();
        const command = input.parse({ add: 'good payload' });
        expect(command.action).toBe('add');
        expect(command.payload).toBe('good payload');
    });

    it('should have undefined action and payload for unknown switch', () => {
        const input = new Input();
        const command = input.parse({ unknown: 'some payload' });
        expect(command.action).not.toBeDefined();
        expect(command.payload).not.toBeDefined();
    });

});

describe('Parse list', () => {
    it('should parse --list', () => {
        const input = new Input();
        const command = input.parse({ list: true });
        expect(command.action).toBe('list');
    });
    it('should parse -l', () => {
        const input = new Input();
        const command = input.parse({ l: true });
        expect(command.action).toBe('list');
    });
});

describe('parse category', () => {

    it('should parse -a with payload and --category', () => {
        const input = new Input();
        const command = input.parse({ a: 'good payload', category: 'good category' });
        expect(command.action).toBe('add');
        expect(command.payload).toBe('good payload');
        expect(command.category).toBe('good category');
    });

    it('should parse -a with payload and -c', () => {
        const input = new Input();
        const command = input.parse({ a: 'good payload', c: 'good category' });
        expect(command.action).toBe('add');
        expect(command.payload).toBe('good payload');
        expect(command.category).toBe('good category');
    });

    it('should parse --list and --category', () => {
        const input = new Input();
        const command = input.parse({ list: true, category: 'good category' });
        expect(command.action).toBe('list');
        expect(command.category).toBe('good category');
    });

    it('should parse --add with bad payload', () => {
        const input = new Input();
        const command = input.parse({ list: true, payload: true });
        expect(command.action).toBe('list');
        expect(command.payload).not.toBeDefined();
    });

})

describe('Parse delete', () => {
    it('should parse --delete', () => {
        const input = new Input();
        const command = input.parse({ delete: 'someid' });
        expect(command.action).toBe('delete');
        expect(command.payload).toBe('someid');
    });
    it('should parse -d', () => {
        const input = new Input();
        const command = input.parse({ d: 'someid' });
        expect(command.action).toBe('delete');
        expect(command.payload).toBe('someid');
    });
});

describe('Validate', () => {

    it('valid() respects a proper object', () => {
        let options = new Input();
        expect(options.valid()).toBe(true);
    });

    it('valid() rejects an invalid object', () => {
        let options = new Input();
        options.command = {}; // break it
        expect(options.valid()).toBe(false);
    });

    it('valid() rejects an invalid object', () => {
        let options = new Input();
        options.command = { action: 'add', payload: undefined }; // break it
        expect(options.valid()).toBe(false);
    });

});

describe.skip('category', () => {
    it('should parse category with full switch', () => {
        let options = new Input();
        const actual = options.parse({ add: 'buy milk', category: 'groceries' });
        expect(actual.category).toBe('groceries');
    });
    it('should parse category with short switch', () => {
        let options = new Input();
        const actual = options.parse({ add: 'buy milk', c: 'groceries' });
        expect(actual.category).toBe('groceries');
    });
    it('should parse undefined category with missing switch', () => {
        let options = new Input();
        const actual = options.parse({ add: 'buy milk' });
        expect(actual.category).not.toBeDefined();
    });
});
