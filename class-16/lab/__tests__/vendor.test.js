const vendor = require('../apps/vendor');
const emitter = require('../lib/events');

jest.useFakeTimers();

it('should receive delivery politely', () => {
  console.log = jest.fn();
  emitter.emit('delivered', { orderID : '1234' });
  expect(console.log).toHaveBeenCalledWith('VENDOR: Thank you for delivering 1234');
});

it('should emit order', () => {

  const callback = jest.fn();

  emitter.on('pickup', callback);

  expect(callback).not.toBeCalled();

  vendor.start();

  jest.runOnlyPendingTimers();

  expect(callback).toBeCalledWith(expect.objectContaining({store:'1-206-flowers'}));

  expect(callback).toHaveBeenCalledTimes(1);

});