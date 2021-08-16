const City = require("../models/City");

const citiesController = {
  getAllCities: (req, res) => {
    City.find()
      .then((city) => {
        res.json({ success: true, response: city });
      })
      .catch((err) => res.json({ success: false, response: err }));
  },
  getOneCity: (req, res) => {
    City.findOne({ _id: req.params.id })
      .then((city) => {
        if(city){
          res.json({ success: true, response: city });
        }else{
          throw new Error('City not found')
        }
        
      })
      .catch((error) => res.json({ success: false, response: error.message }));
  },
  uploadCity: (req, res) => {
    const cityToLoad = new City({
      name: req.body.name,
      image: req.body.image,
      country: req.body.country,
      currentMoney: req.body.currentMoney,
      language: req.body.language,
      description: req.body.description,
    });
    cityToLoad
      .save()
      .then(() => res.json({ success: true }))
      .catch((err) => res.json({ success: false, error: err }));
  },
  modifyCity: (req, res) => {
    City.findOneAndUpdate({ _id: req.params.id }, { ...req.body })
      .then(() => res.json({ success: true }))
      .catch((err) => res.json({ success: false, response: err }));
  },
  deleteCity: (req, res) => {
    City.findOneAndDelete({ _id: req.params.id })
      .then((city) =>{
        if(city){
          res.json({ success: true })   
        }else{
          throw new Error('the city doesn´t exits...')
        }
      }) 
      .catch((err) => res.json({ success: false, response: err.message }));
  },
};
module.exports = citiesController;
