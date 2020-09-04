'use strict';

const express = require('express');
const cors = require('cors');
const app = express();
const faker = require('faker');
const io = require('socket.io-client');


app.use(express.json());

app.use(express.urlencoded({extended:true}));

app.use(cors());

const PORT = process.env.PORT || 3001;

const socket = io.connect('http://localhost:3000/caps');

app.post('/pickup', (request, response) => {


  let defaultDelivery = {
    store: '1-206-flowers',
    orderID: faker.random.uuid(),
    customer: faker.name.findName(),
    address: faker.address.streetAddress(),
  };

  let delivery = request.body;

  if(Object.keys(delivery).length === 0) {
    delivery = defaultDelivery;
  }

  socket.emit('pickup', delivery);

  response.status(200).send(JSON.stringify(delivery));


});

app.listen(PORT, () => console.log('Listening on PORT', PORT));
