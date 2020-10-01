const router = require('express').Router(); 
let User = require('../models/user.model');

router.route('/').get((req, res) => {       //first endpoint , handles get requests
    User.find()                             // find is mongoose method
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {       // 2nd endpoint, post request
    const username = req.body.username;

    const newUser = new User({username});

    newUser.save()
        .then(() => res.json('User added! good job'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
