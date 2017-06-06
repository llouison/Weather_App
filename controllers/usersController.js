// importing bcrypt node moduls and the user model
const bcrypt = require('bcryptjs');
const User = require('../models/userModel');

// creating the controller object
const userController = {};

// defining the action once the find search history promise is complete
userController.index = (req, res) => {
    User.findAll(req.params.id)
    .then(usersSearch => {
        res.json({
            message: 'ok',
            data: { usersSearch },
        });
    })
    .catch(err => {
        console.log(err);
        res.status(400).json({message: '400', err});
    });
};

// defining the action once the create new user promise is complete
userController.create = (req, res) => {
    console.log(req.body);
    const salt = bcrypt.genSaltSync();
    const hash = bcrypt.hashSync(req.body.password, salt);
    User.create({
        username: req.body.username, 
        firstname: req.body.firstname,
        lasname: req.body.lasname,
        email: req.body.email, 
        password: hash, 
    })
    .then(user => {
        req.login(user, err => {
            if (err) return next(err);
            res.json({ message: 'ok', data: { user }});
        });
    })
    .catch(err => {
        console.log(err);
        res.status(400).json({message: '400, err'});
    });
};

// defining the action once the create new search query promise is complete
userController.createQuery = (req, res) => {
    console.log(req.body)
    User.createQuery(req.body)
    .then(query => {
      res.json({message: 'ok', data: { query }});
    })
    .catch(err => {
      console.log(err);
      res.status(400).json({message: '400', err});
    });
};

// exporting the user controller to userRoutes
module.exports = userController;