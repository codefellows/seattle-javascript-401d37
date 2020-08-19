const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('out of range', () => {
  expect(() => sum('junk', null)).toThrowError('a and b must be numeric');
});
