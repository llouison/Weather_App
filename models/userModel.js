// importing pg-promise from the config file
const db = require('../db/config');

// creating a model object
const User = {};

// creating the findAll method to find all books belonging to user
User.findAll = id => {
    return db.query('SELECT search_input FROM users_search JOIN users ON users_search.user_ref_id = users.id WHERE users.id = $1', [id]);
};

// creating the find user method 
User.findByUserName = userName => {
    console.log('in model', userName)
  return db.oneOrNone('SELECT * FROM users WHERE username = $1', [userName]);
};

// creating the create new user method
User.create = user => {
    return db.one(
        `
        INSERT INTO users
        (username, first_name, last_name, email, password)
        VALUES ($1, $2, $3, $4, $5) RETURNING *
        `,
        [user.username, user.firstname, user.lastname, user.email, user.password]
    );
};

// creating the add entry method
User.createQuery = (query) => {
    console.log('creating query in model', query.userId);
    return db.one(
        `
        INSERT INTO users_search (user_ref_id, search_input) VALUES ($1, $2) RETURNING *
        `,
        [query.userId, query.search]
    );
};

// exporting the user model to usersController and passport.js
module.exports = User;