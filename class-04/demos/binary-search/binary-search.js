/*
[11,13,15,17,19,21,23,25]
 ^      ^
 key 13
 left 0
 right 2
 midIndex 1
 midVal 13

 return 1
 --------------------------
 [11,13,15,17,19,21,23,25]
                     ^  ^
 key 23
 left 6
 right 7
 midIndex 6
 midVal 23
 return 6
  
 --------------------------
 [11,13,15,17,19,21,23,25]
                        ^
 key 24
 left 7
 right 6
 midIndex 7
 midVal 25
 return -1

*/

const { assert } = require("console");

function searchIterative(arr, key) {

  let left = 0;

  let right = arr.length - 1;

  while (left <= right) {

    const midIndex = Math.floor((left + right) / 2);

    const midVal = arr[midIndex];

    if (midVal === key) {
      return midIndex;
    } else if (key < midVal) {
      right = midIndex - 1;
    } else {
      left = midIndex + 1;
    }
  }
  return -1;
}

function search(arr, key) {

  function _search(left, right) {

    // base case. All hope is lost. Stop recursing!
    if (left > right) {
      return -1;
    }

    const midIndex = Math.floor((left + right) / 2);

    const midVal = arr[midIndex];

    if (midVal === key) {
      return midIndex;
    } else if (key < midVal) {
      return _search(left, midIndex - 1);
    } else {
      return _search(midIndex + 1, right);
    }
  }

  return _search(0, arr.length - 1);
}

assert(search([11, 13, 15, 17, 19, 21, 23, 25], 11) === 0);
assert(search([11, 13, 15, 17, 19, 21, 23, 25], 19) === 4);
assert(search([11, 13, 15, 17, 19, 21, 23, 25], 20) === -1);

assert(searchIterative([11, 13, 15, 17, 19, 21, 23, 25], 11) === 0);
assert(searchIterative([11, 13, 15, 17, 19, 21, 23, 25], 19) === 4);
assert(searchIterative([11, 13, 15, 17, 19, 21, 23, 25], 20) === -1);

console.log('passed!!!!!!')

/*
1st case: key found
2nd case: key not found aka base case reached
3rd case: stack overflow, probably fo.rgot base

and so on
_search
_search
_search
_search
search
-------------------
*/