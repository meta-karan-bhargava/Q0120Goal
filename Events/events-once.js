const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

let m = 0;
const myEmitter = new MyEmitter();

myEmitter.once('myevent', () => {
	++m; // this should happen once
	m === 1 ? console.log('This should be logged.') : console.log('This shouldn\'t be logged.');
});

myEmitter.emit('myevent');
myEmitter.emit('myevent');// Ignored