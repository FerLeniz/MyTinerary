const express=require('express')
const router=express.Router()
const citiesController=require('../controller/citiesControllers')

router.route('/dataCities')
.get(citiesController.getAllCities)
.post(citiesController.uploadCity)

router.route('/city/:id')
.get(citiesController.getOneCity)
.delete(citiesController.deleteCity)
.put(citiesController.modifyCity)

module.exports = router


