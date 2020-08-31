jest.useFakeTimers();
const emitter = require('../lib/events');
require('../caps');

const delivery = {
  store: '1-206-flowers',
  orderID: '1234',
  customer: 'tester testerooni',
  address: '123 Nowhere Lane',
};

it('should log pickup', () => {

  console.log = jest.fn();

  emitter.emit('pickup', delivery);

  expect(console.log).toHaveBeenLastCalledWith("EVENT",
    expect.objectContaining({event:'pickup'}));

});

it('should log in-transit', () => {

  console.log = jest.fn();

  emitter.emit('in-transit', delivery);

  expect(console.log).toHaveBeenLastCalledWith("EVENT", expect.objectContaining({event:'in-transit'}));

});

it('should log delivered', () => {

  console.log = jest.fn();

  emitter.emit('delivered', delivery);

  expect(console.log).toHaveBeenLastCalledWith("EVENT", expect.objectContaining({event:'delivered'}));

});
