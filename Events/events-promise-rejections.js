// code not working as captureRejections is experimental
const EventEmitter = require('events');
const ee = new EventEmitter({captureRejections : true});
ee.on('something', async (value) => {
	throw new Error('kaboom');
});

ee[Symbol.for('nodejs.rejection')] = console.log('Hello');
ee.emit('something');s