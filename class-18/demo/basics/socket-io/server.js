'use strict';

const io = require('socket.io')(process.env.PORT || 3000);

io.on('connection', (socket) => {
  console.log('CONNECTED', socket.id);

  socket.on('sunrise', (payload) => {
    console.log('received sunrise message', payload);
    io.emit('sunrise', payload);
  });

});











