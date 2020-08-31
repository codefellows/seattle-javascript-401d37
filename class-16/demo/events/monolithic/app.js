'use strict';

const Emitter = require('events');

const emitter = new Emitter();

emitter.on('pizza-ready', onPizzaReady);

function onPizzaReady(info) {
  console.log('PIZZA!!!!!', info);
}

setTimeout(() => {
  if(Math.random() > 0) {
    emitter.emit('pizza-ready',{
      dough:'flour',
      veggie: true,
      vegan: false,
    });
  }
}, 1 * 1000);


console.log('Order pizza');


// const events = new EE();

// // Register our event listeners
// events.on('save', handleSave);
// events.on('delete', payload => logIt('delete', payload));
// events.on('update', payload => logIt('update', payload));
// events.on('cache-update', payload => logIt('cache-update', payload));

// // Emit some events (shout it out to the world!)
// events.emit('update', { id: 77 });
// events.emit('delete', { id: 77 });
// events.emit('save', { id: 77 });

// // Event handler callback functions

// function handleSave(payload) {
//   console.log(`Record ${payload.id} was saved`);
//   // Why not emit another event ...
//   events.emit('cache-update', { id: payload.id });
// }

// function logIt(event, payload) {
//   let time = new Date();
//   console.log({ event, time, payload });
// }

