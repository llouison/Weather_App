const express = require('express');
const usersController = require('../controllers/usersController');
const usersRoutes = express.Router();

const passport = require('../services/auth/passport');

usersRoutes.get('/', (req, res) => {
    //console.log(req.session);
    console.log('getting user', req.user);
    res.json({ user: req.user });
});

//display user's search history
usersRoutes.get('/:id', usersController.index);

//create new user
usersRoutes.post('/', usersController.create);

//create new search query
usersRoutes.post('/:id', usersController.createQuery);

// exporting to app.js
module.exports = usersRoutes;