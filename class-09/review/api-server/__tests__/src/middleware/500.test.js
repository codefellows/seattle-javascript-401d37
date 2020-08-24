const errorMiddleware = require('../../../src/middleware/500.js');

// Tested middleware needs to either be exported from the server or a separate module
describe('500 middleware', () => {

  let error = {message:'something broke'};
  let req = {};
  let res = {
    status: jest.fn(),
    statusMessage: '',
    json: jest.fn(),

    // jest.fn allows us to "stub out" function calls
    // alternate to jest.fn() is to create the functions yourself
    // json: obj => expect(obj.error).toBe('Not Found'),
    // status: code => expect(code).toBe(404),
  };
  let next = jest.fn();

  it('has proper status', () => {
    errorMiddleware(error, req, res, next);
    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.statusMessage).toBe('Server Error');
  });

  it('responds with proper json', () => {
    errorMiddleware(error, req, res, next);
    expect(res.json).toHaveBeenCalledWith({error:{message:'something broke'}});
  });

  it('does NOT call next', () => {
    errorMiddleware(error, req, res, next);
    expect(next).not.toHaveBeenCalled();
  });

});
