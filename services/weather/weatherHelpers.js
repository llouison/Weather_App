// importing isomorphic fetch
require('isomorphic-fetch');
// importing dot env
require('dotenv').config();
//importing the users controller
const usersController = require('../../controllers/usersController');
// setting variables for the darksky and googlemaps api keys
const WEATHER_KEY = process.env.WEATHER_API_KEY;
const GOOGLE_KEY = process.env.GOOGLE_API_KEY;

function getLocationInfo(req, res, next) {
  console.log('body', req.body, req.user)
  usersController.createQuery(req)
  if(!req.body.search){
    res.locals.recipeHits = 'Sorry, nothing found';
    return next();
  }
  let splitQuery = req.body.search.split(' ');
  let searchQuery;
	if (splitQuery.length === 1){
		searchQuery = splitQuery[0];
	} else {
		searchQuery = splitQuery.join(',+');
	}
  console.log('searching for' , searchQuery);
  fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${searchQuery}&key=${GOOGLE_KEY}`)
    .then((fetchRes) => {
      return fetchRes.json();
    })
    .then((jsonFetchRes) => {
      const latitude = jsonFetchRes.results[0].geometry.location.lat;
      const longitude = jsonFetchRes.results[0].geometry.location.lng;
      // adding properties to res.locals
      res.locals.locationInfo = jsonFetchRes.results[0].formatted_address;
      fetch(`https://api.darksky.net/forecast/${WEATHER_KEY}/${latitude},${longitude}`)
      .then((fetchRes2) => {
        return fetchRes2.json();
      })
      .then((jsonFetchRes2) => {
        res.locals.weatherInfo = jsonFetchRes2;
        next();
      })
    })
    .catch((err) => {
        console.log(err);
        // displaying an error message on the page if there is one
        res.locals.locationInfo = 'Sorry, nothing found';
        next();
    });
}

// exporting the function
module.exports = {
  getLocationInfo: getLocationInfo,
}