'use strict';
const io = require('socket.io-client');

const emergencyChannel = io.connect('http://localhost:3000/emergency');

emergencyChannel.emit('join', 'paramedic');

emergencyChannel.on('accident', (payload) => {
  console.log('Paramedics on the way!');
});


