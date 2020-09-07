'use strict';
const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const port = process.argv[2];

app.use(bodyparser.urlencoded({extended: false}));

app.post('/form', (req, res) => {
	let formData = req.body.str;
	res.end(formData.split('').reverse().join(''));
});

app.listen(port, () => {
	console.log('Server listening on ' + port);
});