const express = require("express");
const router = express.Router();
const citiesController = require("../controller/citiesControllers");
itinerariesController = require("../controller/itinerariesController");

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
  .get(itinerariesController.getSpecificItineraries)

module.exports = router;
