const MyEmitter = require('events');
const myEmitter = new MyEmitter();

myEmitter.on('newListener', (event, listener) => {
	console.log('Added Event Listener ' + event);
	listener();// calls the listener function of the event
});

myEmitter.on('firstevent', () => {
	console.log('first event');
});

myEmitter.on('secondevent', () => {
	console.log('second event');
});


