
const vendor = require('./vendor');
let client = require('socket.io-client');
let socket = client.connect();

jest.useFakeTimers();

it('should receive delivery politely', () => {
  console.log = jest.fn();
  socket.emit('delivered', { orderID : '1234' });
  expect(console.log).toHaveBeenCalledWith('Thank you for delivering 1234');
});

it('should emit order', () => {

  const callback = jest.fn();

  socket.on('pickup', callback);

  expect(callback).not.toBeCalled();

  vendor.start();

  jest.runOnlyPendingTimers();

  expect(callback).toBeCalledWith(expect.objectContaining({store:'1-206-flowers'}));

  expect(callback).toHaveBeenCalledTimes(1);

});