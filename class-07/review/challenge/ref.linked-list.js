'use strict';

class LinkedList {

  constructor() {
    this.head = null;
  }

  toString() {
    let current = this.head;
    let str = '';

    while(current) {
      str += `{ ${current.value } } -> `;
      current = current.next;
    }

    return str + 'NULL';
  }

  insert(value) {
    this.head = new Node(value, this.head);
  }

  insertBefore(value, key) {
    let current = this.head;
    while(current) {
      if(current.next && current.next.value == key) {
        current.next = new Node(value, current.next);
        break;
      } else {
        current = current.next;
      }
    }
  }

  insertAfter(value, key) {
    
    if (!this.head) {
      return;
    }

    let current = this.head;

    while(current.next) {
      if (current.value == key) {
        current.next = new Node(value, current.next);
        break;
      }
      current = current.next;
    }
  }
}

class Node {
  
  constructor(value, next=null) {
    this.value = value;
    this.next = next;
  }
}

module.exports = LinkedList