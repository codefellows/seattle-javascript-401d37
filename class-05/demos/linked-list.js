'use strict';

class Node {

    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {

    constructor() {
        this.head = null;
    }


    /*


    Empty Linked List (aka head = null)
    Insert apples (value argument = apples)
      - create a new Node("apples", null)
        - {value:"apples",next:null} Node
      - this.head = that new Node instance
      - return undefined (by default)


    Not Empty Linked List {head = {value:"apples", next:null}}
    Insert bananas (value arg = "bananas")
      - create a new Node("bananas", {value:"apples", next:null})
      - this.head = the new Node instance
      - return undefined (by default)

    */


    // really could be called insertNewHead
    insert(value) {
        this.head = new Node(value, this.head);
    }


    // { a } -> { b } -> { c } -> null
    //                             -> { d } -> null
    // add d
    // { a } -> { b } -> { c } -> { d } -> null
    //                               ^
    //                              ^    -> { e } -> null

    // vowelCtr = 2

    // value is ANY type
    // KidNode { mother: string, father: string, next:null}

    // Node {
    //  value: { mother: string, father: string}
    // next: null
    // }

    append(value) {

        const newNode = new Node(value);

        if (!this.head) {
            // add to the tail (aka end) of the list
            this.head = newNode;
            return;
        }

        // while loop looking for a node with a next of null

        let currentNode = this.head;

        while (currentNode.next) {
            currentNode = currentNode.next;
        }

        // we KNOW that currentNode is a node, in fact the LAST node
        currentNode.next = newNode;
    }

}

module.exports = LinkedList;
