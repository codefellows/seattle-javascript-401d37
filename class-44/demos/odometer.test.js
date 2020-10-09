const { it } = require('@jest/globals');
const LinkedList = require('./linked-list');
const odometer = require('./odometer');

it('should add to 1', () => {
  const list = new LinkedList([1]);

  const result = odometer(list);

  expect([...result]).toEqual([2]);
});

it('should add to 18', () => {
  const list = new LinkedList([1, 8]);

  const result = odometer(list);

  expect([...result]).toEqual([1, 9]);
});

it('should add to 19', () => {
  const list = new LinkedList([1, 9]);

  const result = odometer(list);

  expect([...result]).toEqual([2, 0]);
});

it('should add to 99', () => {
  const list = new LinkedList([9, 9]);

  const result = odometer(list);

  expect([...result]).toEqual([1, 0, 0]);
});

it('should handle empty list', () => {
  const list = new LinkedList();

  const result = odometer(list);

  expect([...result]).toEqual([1]);

});
