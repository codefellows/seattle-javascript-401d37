require('./driver');
let client = require('socket.io-client');
let socket = client.connect();

jest.useFakeTimers();

beforeEach(jest.clearAllTimers);

const delivery = {
  store: '1-206-flowers',
  orderID: '1234',
  customer: 'tester testerooni',
  address: '123 Nowhere Lane'
};

describe('handle pick up event', () => {

  it('should emit in-transit event at right time', () => {

    console.log = jest.fn();

    const inTransitHandler = jest.fn();

    socket.on('in-transit', inTransitHandler);

    socket.emit('pickup', delivery);

    expect(inTransitHandler).toHaveBeenCalledTimes(0);

    jest.advanceTimersByTime(2000);

    expect(inTransitHandler).toHaveBeenCalledTimes(1);

    expect(console.log).toHaveBeenCalledWith(`DRIVER: picked up ${delivery.orderID}`);

  });

  it('should emit delivered event at right time', () => {

    console.log = jest.fn();

    const deliveredHandler = jest.fn();

    socket.on('delivered', deliveredHandler);

    socket.emit('pickup', delivery);

    expect(deliveredHandler).toHaveBeenCalledTimes(0);

    jest.advanceTimersByTime(3000);

    expect(deliveredHandler).toHaveBeenCalledTimes(1);

    // Notice the "Last" in method name
    expect(console.log).toHaveBeenLastCalledWith(`DRIVER: delivered ${delivery.orderID}`);

  });
});
