const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const users = require('./Users');

app.get('/api/users', (req, res) => {
	res.json(users);
});

app.get('/api/user/:id', (req, res) => {
	res.json(users.filter(user => 
        user.id === parseInt(req.params.id)
    ))
})

app.listen(PORT, () => {
	console.log(`Server listening on port ${PORT}`);
})