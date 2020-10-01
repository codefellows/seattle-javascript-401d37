const { BinarySearchTree } = require('./bst.js');
const findClosestBowler = require('./main');

it('should foo', () => {
  const bst = new BinarySearchTree([
    {name:'Jane Doe', score: 97},
    {name:'Lucky Pierre', score: 102},
    {name:'Noob', score: 54},
  ]);

  expect(bst.root.value.score).toBe(97);
  expect(bst.root.right.value.score).toBe(102);

});

it('should get closest when over', () => {
  const bst = new BinarySearchTree([
    {name:'Jane Doe', score: 97},
    {name:'Lucky Pierre', score: 102},
    {name:'Noob', score: 54},
  ]);

  const result = findClosestBowler(bst);

  expect(result.name).toBe('Lucky Pierre');

});

it('should get closest when under', () => {
  const bst = new BinarySearchTree([
    {name:'Jane Doe', score: 97},
    {name:'Lucky Pierre', score: 99},
    {name:'Noob', score: 54},
  ]);

  const result = findClosestBowler(bst);

  expect(result.name).toBe('Lucky Pierre');

});

it('should get bullseye', () => {
  const bst = new BinarySearchTree([
    {name:'Jane Doe', score: 97},
    {name:'Lucky Pierre', score: 100},
    {name:'Noob', score: 54},
  ]);

  const result = findClosestBowler(bst);

  expect(result.name).toBe('Lucky Pierre');

});



