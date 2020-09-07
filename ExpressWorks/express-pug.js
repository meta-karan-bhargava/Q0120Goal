'use strict';
const express = require('express');
const app = express();
const port = process.argv[2];

app.set('view engine', 'pug');
app.set('views', process.argv[3]);

app.get('/home', (req, res) => {
	res.render('index', {date: new Date().toDateString()});
});

app.listen(port, () => {
	console.log('Server started on port ' + port);
});