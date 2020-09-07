'use strict';
const express = require('express');
const fs = require('fs');
const { send } = require('process');
const port = process.argv[2];
const app = express();

app.get('/books', (req, res) => {
	fs.readFile(process.argv[3], 'utf8', (err, data) => {
		if(err) {
			res.status(400);
			res.end();
		} else {
			let books;
			try{
				books = JSON.parse(data);
			} catch (err) {
				console.error(err);
			}
			res.status(200).send(books);
		}
	})
});

app.listen(port, () => {
	console.log('Server listening on port ' + port);
})