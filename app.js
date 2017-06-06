// setting up variables for node modules
const express = require('express');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const methodOverride = require('method-override');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('passport');
/* importing dotenv config function to locate the environment variables in the .env file */
require('dotenv').config();
// creating a variable for the express function
const app = express();

// setting up port for express to listen to for activity
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});

/* setting up cors*/
app.use(cors());
// setting up the morgan logger function to run on dev script
app.use(logger('dev'));
// setting up the cookie parser module
app.use(cookieParser());
// setting up the body parser function to run on json info
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
// setting up the method override module to run on http method key word
app.use(methodOverride('_method'));
// setting up the express session module
app.use(session({
  secret: process.env.SECRET_KEY,
  resave: false,
  saveUninitialized: true
}));
// setting up the passport module
app.use(passport.initialize());
app.use(passport.session());

// setting up the route to the index page
app.get('/api', function(req, res) {
    res.sendFile(__dirname + '/public/index.html');
});

// importing the recipeHelper function for the search view
const weatherHelpers = require('./services/weather/weatherHelpers');
/* importing routes and assigning urls for books api and users api*/
const usersRoutes = require('./routes/usersRoutes');
const authRoutes = require('./routes/auth');
app.use('/api/users', usersRoutes);
app.use('/auth', authRoutes);
app.get('/api/users', usersRoutes);
app.get('/auth', authRoutes);
app.post('/api/search', weatherHelpers.getLocationInfo, (req, res) => {
    res.json({
        message: 'ok',
        data: {
            locationInfo: res.locals.locationInfo,
            weatherInfo: res.locals.weatherInfo,
        }, 
    });
});
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

// handling 404 errors
app.get('*', (req, res) => {
    res.status(404).send({message: 'Error, not found'});
});