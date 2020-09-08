const MongoClient = require('mongodb').MongoClient;
const dbURL = 'mongodb://localhost:27017/';
MongoClient.connect(dbURL, (err, database) => {
	if(err) {
		console.error('Error in connecting to database');
		throw err;
	}
	var db = database.db('learnyoumongo');
	var prices = db.collection('prices');
	prices.aggregate([
		{
			$match: {
				size: process.argv[2]
			}
		}, {
			$group: {
				_id: 'average',
				total: {$avg: '$price'}
			}
		}
	]).toArray(function(err, results){
		if(err) {
			console.error('Error in converting results to array'); 
			throw err
		};
		console.log(parseFloat(results[0].total).toFixed(2));
		database.close();
	});
})