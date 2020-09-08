const MongoClient = require('mongodb').MongoClient;
const dbURL = 'mongodb://localhost:27017/';
MongoClient.connect(dbURL, (err, database) => {
	if(err) {
		console.error('Error in connecting to database');
		throw err;
	}
	var db = database.db('learnyoumongo');
	var parrots = db.collection('parrots');
	parrots.find({
		age: {$gt: parseInt(process.argv[2])}
	}).toArray((err, documents) => {
		if(err) {
			console.error('Error in converting results to array');
			throw err;
		}
		console.log(documents);
		database.close();
	});
})