const MongoClient = require('mongodb').MongoClient;
const dbURL = 'mongodb://localhost:27017/';
MongoClient.connect(dbURL, (err, database) => {
	if(err) {
		console.error('Error in connecting database');
		throw err;
	}
	var db = database.db(process.argv[2]);
	var collection = db.collection(process.argv[3]);
	collection.remove({
		_id: process.argv[4]
	}, (err, data) => {
		if(err) {
			console.error('Error in converting deleting records');
			throw err;
		}
		database.close();
	});
})