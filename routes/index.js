const express = require("express");
const router = express.Router();
const citiesController = require("../controller/citiesControllers");
const itinerariesController = require("../controller/itinerariesController");
const usersController = require("../controller/usersControllers");
const validator = require("../controller/validator");
const passport = require('passport')

router
  .route("/dataCities")
  .get(citiesController.getAllCities)
  .post(citiesController.uploadCity);

router
  .route("/city/:id")
  .get(citiesController.getOneCity)
  .delete(citiesController.deleteCity)
  .put(citiesController.modifyCity);

router
  .route("/itineraries")
  .get(itinerariesController.getAllItineraries)
  .post(itinerariesController.addItinerary);

router
  .route("/itinerary/:id")
  .get(itinerariesController.getOneItinerary)
  .delete(itinerariesController.deleteItinerary)
  .put(itinerariesController.modifyItinerary);

router
  .route("/itineraries/:cityId")
  .get(itinerariesController.getSpecificItineraries);

router.route("/signUpUser").post(validator, usersController.addNewUser);

router.route("/logInUser").post(usersController.logUser);

router
  .route("/verifyToken")
  .get(
    passport.authenticate("jwt", { session: false }),
    usersController.verifyToken
  );

module.exports = router;
