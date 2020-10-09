class LinkedList {
  constructor(values=null) {
    this.head = null;
    if(values) {
      for(let value of values.reverse()) {
        this.insert(value);
      }
    }
  }


  // in place
  reverse() {
    /*
                    h     c
      null <-  a <- b -> null
                    p     n
          prev = a
          current = next
          current.next = prev
          next = b

  null <- a <- b

    */

    if(!this.head) return;

    let next, prev = null;
    let current = this.head;

    while(current) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }

    this.head = prev;

  }

  insert(value) {
    this.head = new Node(value, this.head);
  }

  *[Symbol.iterator]() {

    let current = this.head;

    while (current) {

      console.log(current.value);

      yield current.value;

      current = current.next;
    }

  }

  // walk through and do "the thing"
  traverse(callback) {

    let current = this.head;

    while (current) {

      // do the thing
      callback(current.value);

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

module.exports = LinkedList;
