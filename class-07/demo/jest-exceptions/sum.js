function sum(a, b) {

  if (Number.isInteger(a) && Number.isInteger(b)) {
    return a + b;
  }

  throw RangeError('a and b must be numeric');
}
module.exports = sum;
