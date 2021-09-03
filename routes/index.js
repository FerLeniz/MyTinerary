const express = require("express");
const router = express.Router();
const citiesController = require("../controller/citiesControllers");
const itinerariesController = require("../controller/itinerariesController");
const usersController = require("../controller/usersControllers");
const activitiesController = require("../controller/activitiesController");
const validator = require("../controller/validator");
const passport = require("passport");

// CITIES
router
  .route("/dataCities")
  .get(citiesController.getAllCities)
  .post(citiesController.uploadCity);

router
  .route("/city/:id")
  .get(citiesController.getOneCity)
  .delete(citiesController.deleteCity)
  .put(citiesController.modifyCity);

//  ITINERARIES
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

router.route("/itinerary/like/:id").post(itinerariesController.likeStatus);

router
  .route("/itinerary/comment/:id")
  .post(passport.authenticate("jwt", { session: false }), itinerariesController.addComment)
   .delete(itinerariesController.deleteComment)
   .put(itinerariesController.editComment);

// USERS
router.route("/signUpUser").post(validator, usersController.addNewUser);

router.route("/logInUser").post(usersController.logUser);

router
  .route("/verifyToken")
  .get(
    passport.authenticate("jwt", { session: false }),
    usersController.verifyToken
  );

/* ACTIVITIES*/
router.route("/activity").post(activitiesController.addNewActivity);

router
  .route("/activities/:itineraryId")
  .get(activitiesController.getSpecificActivities);

module.exports = router;
