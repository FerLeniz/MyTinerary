const City = require("../models/City");

const citiesController = {
  getAllCities: (req, res) => {
    City.find()
      .then((city) => {
        if (city.length > 0) {
          res.json({ success: true, response: city });
        } else {
          throw new Error("There are noy cities");
        }
      })
      .catch((err) => res.json({ success: false, response: err.message }));
  },
  getOneCity: (req, res) => {
    City.findOne({ _id: req.params.id })
      .then((city) => {
        if (city) {
          res.json({ success: true, response: city });
        } else {
          throw new Error("City not found");
        }
      })
      .catch((error) => res.json({ success: false, response: error.message }));
  },
  uploadCity: (req, res) => {
    const cityToLoad = new City({ ...req.body });
    cityToLoad
      .save()
      .then(() => res.json({ success: true,response:cityToLoad }))
      .catch((err) => res.json({ success: false, error: err }));
  },
  modifyCity: (req, res) => {
    City.findOneAndUpdate(
      { _id: req.params.id },
      { ...req.body },
      { new: true }
    )
      .then(() => res.json({ success: true }))
      .catch((err) => res.json({ success: false, response: err }));
  },
  deleteCity: (req, res) => {
    City.findOneAndDelete({ _id: req.params.id })
      .then((city) => {
        if (city) {
          res.json({ success: true });
        } else {
          throw new Error("the city doesn´t exits...");
        }
      })
      .catch((err) => res.json({ success: false, response: err.message }));
  },
};
module.exports = citiesController;
