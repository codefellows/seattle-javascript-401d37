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

    if (this.head.value === targetValue) {
      this.insert(newValue);
      return;
    }

    let current = this.head;

    while (current.next) {

      if (current.next.value !== targetValue) {
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

  kthFromEnd(k) {

    const arr = [];

    let currentNode = this.head;

    if (currentNode) {
      arr.push(currentNode.value);
    }

    while (currentNode.next) {
      currentNode = currentNode.next;
      arr.push(currentNode.value);
    }

    if (k > arr.length) {
      // do this thing
      throw new RangeError('k too big');

    } else if (k === arr.length) {
      // do other thing
      throw new RangeError('k is 1 to big');

    } else if (k < 0) {
      // do third thing
      throw new RangeError('k is too small');

    } else {
      const indexOfValue = arr.length - (k + 1);
      return arr[indexOfValue];
    }

  }
}

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

module.exports = LinkedList;
