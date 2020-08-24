const notFoundMiddleware = require('../../../src/middleware/404.js');

// Tested middleware needs to either be exported from the server or a separate module
describe('404 middleware', () => {

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
    notFoundMiddleware(req, res, next);
    expect(res.status).toHaveBeenCalledWith(404);
    expect(res.statusMessage).toBe('Resource Not Found');
  });

  it('responds with proper json', () => {
    notFoundMiddleware(req, res, next);
    expect(res.json).toHaveBeenCalledWith({error:'Not Found'});
  });

  it('does NOT call next', () => {
    notFoundMiddleware(req, res, next);
    expect(next).not.toHaveBeenCalled();
  });

});
