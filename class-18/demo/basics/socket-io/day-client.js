'use strict';

const io = require('socket.io-client');

const socket = io.connect('http://localhost:3000');


// What code will trigger server to log...
// console.log('received sunrise message', payload);
