const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

myEmitter.on(EventEmitter.errorMonitor, (err) => {
	console.log('Error event emitted.');
	console.error(err);
});

myEmitter.emit('error', new Error('Error event'));

