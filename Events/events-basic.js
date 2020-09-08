const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('myevent', () => {
	console.log('My Event occurred');
});
myEmitter.emit('myevent');