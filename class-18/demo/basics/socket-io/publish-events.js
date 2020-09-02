'use strict';

const io = require('socket.io-client');
const socket = io.connect('http://localhost:3000');

// Server Namespace (area) to handle city-wide emergencies
const emergency = io.connect('http://localhost:3000/emergency');

// Server Namespace (area) to handle weather updates
const weather = io.connect('http://localhost:3000/weather');

// No namespace, this goes to every client
socket.emit('sunrise',{review:'lovely deep purple'});

emergency.emit('fire', 'Fishing boat on fire on Dock 74');
emergency.emit('accident', 'Skater with broken ankle');

weather.emit('rain');
weather.emit('snow');


