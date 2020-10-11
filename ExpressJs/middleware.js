//Middleware Function 

const moment = require('moment');
const middleware = (req, res, next) => {
	console.log(`${req.protocol}://${req.get('host')}${req.originalUrl} ${moment().format()}`);
	next(); // need to call this to pass control to next handler
}

module.exports = middleware;