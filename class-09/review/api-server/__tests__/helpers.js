function verifyProps(a, b) {
  for(let key in a) {

    const valueA = a[key];

    const valueB = b[key];

    expect(valueA).toBe(valueB);
  }
}

it('should verify all key/value pairs in object A match in object B', () => {
  const oneObject = {property:'some value'};
  const anotherObject = {property:'some value'};

  verifyProps(oneObject, anotherObject);
});

module.exports = {
  verifyProps,
};
