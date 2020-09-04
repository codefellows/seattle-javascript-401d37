'use strict';

// sharing this dependency, for now
const faker = require('faker');

const Queue = require('./lib/queue.js');

const companyID = 'acme-widgets';
const queue = new Queue(companyID);

queue.subscribe('delivered', (payload) => {
  console.log('Widgets Were Delivered', payload.code);
});

queue.subscribe('in-transit', (payload) => { });

queue.trigger('getall', 'delivered');


setInterval(() => {
  queue.trigger('pickup', {
    store: companyID,
    code: faker.random.uuid(),
    orderID: faker.random.uuid(),
    customer: `${faker.name.firstName()} ${faker.name.lastName()}`,
    address: `${faker.address.city()}, ${faker.address.stateAbbr()}`,
  });
}, 1500);
