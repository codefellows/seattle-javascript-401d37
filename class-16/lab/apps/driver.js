/*
driver.js - Drivers Module
Monitor the system for events …
On the ‘pickup’ event …
Wait 1 second
Log “DRIVER: picked up [ORDER_ID]” to the console.
Emit an ‘in-transit’ event with the payload you received
Wait 3 seconds
Log “delivered” to the console
Emit a ‘delivered’ event with the same payload
*/
const emitter = require('../lib/events');


emitter.on('pickup', onPickup);

function onPickup(order) {


  // wait 1 second
  setTimeout(() => {
    // what after 1 second

    // Log “DRIVER: picked up [ORDER_ID]” to the console.
    // Emit an ‘in-transit’ event with the payload you received
    console.log('the stuff in a particular way');
    emitter.emit('in-transit', order);

  }, 1000);

  // also after 3 seconds do something
}
