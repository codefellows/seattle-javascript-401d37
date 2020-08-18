class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(value) {
    this.head = new Node(value, this.head);
  }

  insertBefore(targetValue, newValue) {

    if (!this.head) {
      return;
    }

    if(this.head.value === targetValue) {
      this.insert(newValue);
      return;
    }

    let current = this.head;

    while(current.next) {

      if(current.next.value !== targetValue) {
        current = current.next;
      } else {
        current.next = new Node(newValue, current.next);
        break;
      }
    }
  }

  toString() {
    let str = '';

    let current = this.head;

    while (current) {
      str += `{ ${current.value} } -> `;
      current = current.next;
    }

    return str + 'NULL';
  }
}


class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

module.exports = LinkedList;
