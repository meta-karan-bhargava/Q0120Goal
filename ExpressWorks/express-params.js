const express = require('express');
const crypto = require('crypto');
const app = express();
const port = process.argv[2];

app.put('/message/:id', (req, res) => {
	let id = req.params.id;
	let digestSHA = crypto
		.createHash('sha1')
		.update(new Date().toDateString() + id)
		.digest('hex');
	res.send(digestSHA);
});

app.listen(port, () => {
	console.log('Server listening on port ' + port);
})