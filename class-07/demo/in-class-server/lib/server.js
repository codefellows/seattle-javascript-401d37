const express = require('express');
require('dotenv').config();
const app = express();

const fruitRouter = require('./routes.js');


// Global Middleware
app.use(express.json()); // step in front of ALL requests, inspect it for a body and parse it as needed and include it on request

app.use(logRequest); // register the middleware

app.use(getBrowser);

app.use(fruitRouter);


function logRequest(req, res, next) {
    console.log('Now we are cooking with gas!!!!');
    next();
};

// Adds the name of the browser to the request
function getBrowser(req, res, next) {
    req.browser = req.headers['user-agent'];
    next();
  }

module.exports = {
  start: port => {
    const PORT = port || process.env.PORT || 3000;
    app.listen(PORT, () => console.log(`Listening on ${PORT}`));
  },
};
