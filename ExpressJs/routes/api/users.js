const express = require('express');
const router = express.Router();
const users = require('../../Users');
const uuid = require('uuid');
router.get('/', (req, res) => {
	res.json(users);
});

router.post('/', (req, res)=>{
    const newUser = {
        id: uuid.v4(),
        name: req.body.name,
        email: req.body.email
    };

    if(!newUser.name || !newUser.email) {
        return res.status(400).json({message : 'Please include a name and email'});
    }

    users.push(newUser);
    res.json(users);
});

router.get('/:id', (req, res) => {
	res.json(users.filter(user => 
        user.id === parseInt(req.params.id)
    ));
});

module.exports = router;