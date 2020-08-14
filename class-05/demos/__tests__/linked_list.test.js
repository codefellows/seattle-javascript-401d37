'use strict';

const LinkedList = require('../linked-list.js');

it('should insantiate', () => {
    const ll = new LinkedList();
    expect(ll).toBeDefined();
});

it('should add to empty list', () => {
    const ll = new LinkedList();
    ll.insert('apples');
    expect(ll.head.value).toBe('apples');
});

it('should add to NOT empty list', () => {
    const ll = new LinkedList();
    ll.insert('apples');
    ll.insert('bananas');
    expect(ll.head.value).toBe('bananas');
    expect(ll.head.next.value).toBe('apples');
});

it('should append to empty list', () => {
    const ll = new LinkedList();
    ll.append('apples');
    expect(ll.head.value).toBe('apples');
});

it('should append to NOT empty list', () => {
    const ll = new LinkedList();
    ll.insert('apples');
    ll.insert('bananas');

    ll.append('cucumbers');

    expect(ll.head.value).toBe('bananas');
    expect(ll.head.next.value).toBe('apples');

    expect(ll.head.next.next.value).toBe('cucumbers');
    expect(ll.head.next.next.next).toBe(null);


});
