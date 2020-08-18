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
