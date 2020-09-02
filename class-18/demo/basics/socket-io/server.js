'use strict';

const io = require('socket.io')(process.env.PORT || 3000);

io.on('connection', (socket) => {

  // alternate DRY version of event listener "registration" covered in circla back
  const events = ['sunrise', 'sunset'];

  for(let eventName of events) {
    registerEvent(socket, eventName);
  }

});

function registerEvent(socket, eventName) {
  socket.on(eventName, (payload) => {
    logIt(eventName, payload);
    io.emit(eventName, payload);
  });
}

function logIt(eventName, payload) {
  console.log(eventName, payload.review);
}

// Build this second -- it showcases namespaces
// Couple this with the weather.js client
const weather = io.of('/weather');
weather.on('connection', (socket) => {

  console.log('WEATHER CHANNEL', socket.id);

  socket.on('rain', (payload) => {
    weather.emit('rain', payload);
  });

  socket.on('snow', (payload) => {
    weather.emit('snow', payload);
  });

});


// Build last, to show namespaces and rooms
// Couple this with the fire.js and paramedic.js clients
const emergency = io.of('/emergency');

// Assume we have 2 rooms that we care about clients joining: paramedic and fire
emergency.on('connection', (socket) => {

  console.log('EMERGENCY CHANNEL', socket.id);

  // When a user joins a new room, all of their chatting will happen there only
  socket.on('join', room => {
    console.log('joined', room);
    socket.join(room);
  });

  socket.on('accident', (payload) => {
    emergency.to('paramedic').emit('accident', payload);
  });

  socket.on('fire', (payload) => {
    emergency.to('fireDepartment').emit('fire', payload);
  });

});
//*/
