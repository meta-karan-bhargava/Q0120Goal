const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const users = require('./Users');

const middleware = require('./middleware');
app.use(middleware);

app.get('/api/users', (req, res) => {
	res.json(users);
})

app.listen(PORT, () => {
	console.log(`Server listening on port ${PORT}`);
})