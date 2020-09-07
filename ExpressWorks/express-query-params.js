'use strict';
const express = require('express');
const port = process.argv[2];
const app = express();

app.get('/search', (req, res) => {
	res.send(req.query);
});

app.listen(port, () => {
	console.log('Server listening on port ' + port);
})