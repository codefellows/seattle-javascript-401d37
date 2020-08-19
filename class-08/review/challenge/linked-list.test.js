const LinkedList = require('./linked-list.js');

it('should stringify', () => {
  const list = new LinkedList();
  list.insert('apples');
  list.insert('bananas');
  expect(list.toString()).toBe('{ bananas } -> { apples } -> NULL');
});
it('should insert before', () => {
  const list = new LinkedList();
  list.insert('apples');
  list.insert('dates');
  list.insert('bananas');
  list.insertBefore('apples', 'cucumbers');
  expect(list.toString()).toBe('{ bananas } -> { dates } -> { cucumbers } -> { apples } -> NULL');
});

it('should not insert when target missing', () => {
  const list = new LinkedList();
  list.insert('apples');
  list.insert('dates');
  list.insert('bananas');
  list.insertBefore('nothing', 'cucumbers');
  expect(list.toString()).toBe('{ bananas } -> { dates } -> { apples } -> NULL');
});

it.skip('should insert after', () => {
  const list = new LinkedList();
  list.insert('apples');
  list.insert('dates');
  list.insert('bananas');
  list.insertAfter('dates', 'cucumbers');
  expect(list.toString()).toBe('{ bananas } -> { dates } -> { cucumbers } -> { apples } -> NULL');
});

it.skip('should handle empty list when inserting after', () => {
  const list = new LinkedList();
  list.insertAfter('foo', 'bar');
  expect(list.toString()).toBe('NULL');
});

it.skip('should handle empty list when inserting before', () => {
  const list = new LinkedList();
  list.insertBefore('foo', 'bar');
  expect(list.toString()).toBe('NULL');
});





/*
ll.kthFromEnd(k)
Input ll	Arg k	Output
head -> [1] -> [3] -> [8] -> [2] -> X	0	2
head -> [1] -> [3] -> [8] -> [2] -> X	2	3
head -> [1] -> [3] -> [8] -> [2] -> X	6	Exception
*/

it('should get k of 2', () => {

  const list = new LinkedList();
  list.insert('apples');
  list.insert('dates');
  list.insert('bananas');

  expect(list.kthFromEnd(2)).toBe('bananas');

});

/*
zipLists(list1, list2)
         c1   fn1
head -> [1]  [3] -> [2] -> X
         v  /
head -> [5]  [9] -> [4] -> X
         c2  fn2


head -> [1] -> [5] -> [3] -> [9] -> [2] -> [4] -> X

head -> [1] -> [3] -> X	head -> [5] -> [9] -> [4] -> X	head -> [1] -> [5] -> [3] -> [9] -> [4] -> X
head -> [1] -> [3] -> [2] -> X	head -> [5] -> [9] -> X	head -> [1] -> [5] -> [3] -> [9] -> [2] -> X
*/

const zipLists = require('./zip-lists.js');

it('should zip same length lists', () => {


  const list1 = new LinkedList();
  const list2 = new LinkedList();

  list1.insert(2);
  list1.insert(3);
  list1.insert(1);

  list2.insert(4);
  list2.insert(9);
  list2.insert(5);


  const zipped = zipLists(list1, list2);

  expect(zipped.toString()).toBe('{ 1 } -> { 5 } -> { 3 } -> { 9 } -> { 2 } -> { 4 } -> NULL');

});

it('should zip bottom longer lists', () => {

  const list1 = new LinkedList();
  const list2 = new LinkedList();

  list1.insert(2);
  list1.insert(3);
  list1.insert(1);

  list2.insert(12);
  list2.insert(4);
  list2.insert(9);
  list2.insert(5);


  const zipped = zipLists(list1, list2);

  expect(zipped.toString()).toBe('{ 1 } -> { 5 } -> { 3 } -> { 9 } -> { 2 } -> { 4 } -> { 12 } -> NULL');

});

it('should zip top longer lists', () => {

  const list1 = new LinkedList();
  const list2 = new LinkedList();

  list1.insert(15);
  list1.insert(12);
  list1.insert(2);
  list1.insert(3);
  list1.insert(1);


  list2.insert(4);
  list2.insert(9);
  list2.insert(5);


  const zipped = zipLists(list1, list2);

  expect(zipped.toString()).toBe('{ 1 } -> { 5 } -> { 3 } -> { 9 } -> { 2 } -> { 4 } -> { 12 } -> { 15 } -> NULL');

});

