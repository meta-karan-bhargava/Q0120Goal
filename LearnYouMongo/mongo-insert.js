const MongoClient = require('mongodb').MongoClient;
const dbURL = 'mongodb://localhost:27017/';
MongoClient.connect(dbURL, (err, database) => {
	if(err) {
		console.error('Error in connecting to database');
		throw err;
	}
	var db = database.db('learnyoumongo');
	var documents = db.collection('docs');
	let record = {
		firstName: process.argv[2],
		lastName: process.argv[3]
	};
	documents.insert(record, (err, data) => {
		if(err) {
			console.error('Error in inserting');
			throw err;
		}
		console.log(JSON.stringify(record));
		database.close();
	});
})