const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('myfirstevent', (a, b, c) => {
	console.log(a, b, c);
	console.log('Arrow function callback');
	// doesn't binds 'this' to the event emitter
	// because of using arrow functions, this will never bind to myEmitter
	console.log(this === myEmitter);// outputs to false
});
myEmitter.on('mysecondevent', function (a, b) {
	console.log('Normal function callback');
	console.log(a, b);
	// binds 'this' to the event emitter
	console.log(this === myEmitter);// outputs to true
});
myEmitter.emit('myfirstevent', 'a', 'b', 'c');
myEmitter.emit('mysecondevent', 'a', 'b');