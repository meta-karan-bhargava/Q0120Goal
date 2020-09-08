const MongoClient = require('mongodb').MongoClient;
const dbURL = 'mongodb://localhost:27017/';
MongoClient.connect(dbURL, (err, database) => {
	if(err) {
		console.error('Error in connecting to database');
		throw err;
	}
	var db = database.db(process.argv[2]);
	var users = db.collection('users');
	users.update({
		username: "tinatime"
	}, {
		$set: {
			age: 40
		}
	}, (err, data) => {
		if(err) {
			console.error('Error in updating records');
			throw err;
		}
		database.close();
	});
})