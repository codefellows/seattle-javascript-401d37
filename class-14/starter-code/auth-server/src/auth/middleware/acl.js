'use strict';

/* Lab 14 TODO
   Middleware to protect routes based on capabilities
   Make sure this is used where needed
*/

// Notice the curried middleware...we take the desired capability from the route
// and return a middleware function that's aware of it.
module.exports = (capability) => {

  return (req, res, next) => {

    console.log(req.user);

    // We're expecting that previous middleware has put the user object on the request object
    // Given that, we can just inspect their capabilities.
    // Using a try/catch to avoid having to deeply check this object
    try {
      if (req.user.capabilities.includes(capability)) {
        next();
      }
      else {
        next('Access Denied');
      }
    } catch (e) {
      next('Invalid Login');
    }

  };

};
