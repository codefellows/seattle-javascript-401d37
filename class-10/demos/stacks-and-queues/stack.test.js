const Stack = require('./stack');


/*
Can successfully instantiate an empty stack
Can successfully push onto a stack
Can successfully push multiple values onto a stack
Can successfully pop off the stack
Can successfully empty a stack after multiple pops
Can successfully peek the next item on the stack
Calling pop or peek on empty stack raises exception
*/

it('should be a class', () => {
  expect(Stack).toBeDefined();
});

it('should instantiate an empty stack', () => {
  const stack = new Stack();
  expect(stack).toBeDefined();
  // ? check if empty
});

it('Can successfully pop off the stack', () => {

  const stack = new Stack();

  stack.push('apples');

  stack.push('bananas');

  const popped = stack.pop();

  expect(popped).toBe('bananas');

  stack.pop();

  expect(stack.isEmpty()).toBeTruthy();
});

it('Can successfully push onto a stack', () => {

  const stack = new Stack();

  stack.push('apples');

  expect(stack.peek()).toBe('apples');

});

it('should check if is not empty', () => {

  const stack = new Stack();

  stack.push('apples');

  expect(stack.isEmpty()).toBeFalsy();

});

it('should check if is empty', () => {

  const stack = new Stack();

  expect(stack.isEmpty()).toBeTruthy();

});

it('should not allow pop from empty list', () => {

  const stack = new Stack();

  expect(() => stack.pop()).toThrow(RangeError);
  expect(() => stack.pop()).toThrow('Cannot pop off empty stack');

});

it('should not allow peek from empty list', () => {

  const stack = new Stack();

  expect(() => stack.peek()).toThrow(RangeError);
  expect(() => stack.peek()).toThrow('Cannot peek empty stack');

});


