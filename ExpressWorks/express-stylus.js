const express = require('express');
const app = express();
const port = process.argv[2];

app.use(require('stylus').middleware(process.argv[3] || 'public'));
app.use(express.static(process.argv[3] || 'public'));

/*app.get('/main.css', (req, res) => {
	res.end();
});*/

app.listen(port, () => {
	console.log('Server started on port ' + port);
})