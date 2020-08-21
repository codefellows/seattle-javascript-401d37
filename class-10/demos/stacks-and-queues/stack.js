class Stack {

  constructor() {
    // DANGER: using Array NOT linked list
    // You need to use Linked List
    this.storage = [];
  }

  peek() {

    if(this.isEmpty()) {
      throw new RangeError('Cannot peek empty stack');
    }

    let topIndex = this.storage.length - 1;

    return this.storage[topIndex];
  }

  push(value) {
    this.storage.push(value);
  }

  pop() {

    if(this.isEmpty()) {
      throw new RangeError('Cannot pop off empty stack');
    }

    return this.storage.pop();
  }

  isEmpty() {

    return this.storage.length === 0;

    // if(this.storage.length === 0) {
    //   return true;
    // } else {
    //   return false;
    // }
  }
}


module.exports = Stack;
