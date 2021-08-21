const express=require('express')
const router=express.Router()
const citiesController=require('../controller/citiesControllers')
itinerariesController=require('../controller/itinerariesController')

router.route('/dataCities')
.get(citiesController.getAllCities)
.post(citiesController.uploadCity)

router.route('/city/:id')
.get(citiesController.getOneCity)
.delete(citiesController.deleteCity)
.put(citiesController.modifyCity)

router.route('/itineraries')
 .get(itinerariesController.getAllItineraries)
 .post(itinerariesController.addItinerary)

router.route('/itineraries/:id')
.get(itinerariesController.getSpecificItineraries)
// .delete(itinerariesController)
// .put(itinerariesController)

module.exports = router


