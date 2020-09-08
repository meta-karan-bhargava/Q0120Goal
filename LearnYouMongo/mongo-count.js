const MongoClient = require('mongodb').MongoClient;
const dbURL = 'mongodb://localhost:27017/';
MongoClient.connect(dbURL, (err, database) => {
	if(err) {
		console.error('Error in connecting to database');
		throw err;
	}
	var db = database.db('learnyoumongo');
	var parrots = db.collection('parrots');
	parrots.count({
		age: {
			$gt: parseInt(process.argv[2])
		}
	}, (err, count) => {
		if(err) {
			console.error('Error in counting results');
			throw err;
		}
		console.log(count);
		database.close();
	});
})