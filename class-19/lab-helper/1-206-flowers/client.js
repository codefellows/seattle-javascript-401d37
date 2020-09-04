'use strict';

const faker = require('faker');

// sharing this dependency, for now
const Queue = require('./lib/queue.js');
const companyID = '1-206-flowers';
const queue = new Queue(companyID);

queue.subscribe('delivered', (payload) => {
  console.log('Flowers Were Delivered', payload.code);
});

queue.subscribe('in-transit', (payload) => { });

queue.trigger('getall', 'delivered');

setInterval( () => {
  queue.trigger('pickup', {
    store: companyID,
    code: faker.random.uuid(),
    orderID: faker.random.uuid(),
    customer: `${faker.name.firstName()} ${faker.name.lastName()}`,
    address: `${faker.address.city()}, ${faker.address.stateAbbr()}`,
  });
}, 1000);
