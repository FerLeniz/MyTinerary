const Itinerary = require("../models/Itinerary");

const itinerarisControllers = {
  addItinerary: (req, res) => {
    const itineraryToLoad = new Itinerary({ ...req.body });
    itineraryToLoad
      .save()
      .then(() => res.json({ success: true }))
      .catch((err) => res.json({ success: false, error: err }));
  },
  getAllItineraries: (req, res) => {
    Itinerary.find()
      .then((itinerary) => {
        if (itinerary.length > 0) {
          res.json({ success: true, response: itinerary });
        } else {
          throw new Error("There are no itineraries");
        }
      })
      .catch((err) => res.json({ success: false, response: err.message }));
  },
  getSpecificItineraries: (req, res) => {
    Itinerary.find({ cityId: req.params.id })
      .populate("cityId")
      .then((itinerary) => {
        if (itinerary.length > 0) {
          res.json({ success: true, response: itinerary });
        } else {
          throw new Error("There are not itineraries");
        }
      })
      .catch((err) => res.json({ success: false, response: err.message }));
  },
  modifyItinerary: (req, res) => {
    Itinerary.findOneAndUpdate(
      { cityId: req.params.id },
      { ...req },
      { new: true }
    )
      .then(() => res.json({ success: true }))
      .catch((err) => res.json({ success: false, response: err.message }));
  },
  deleteItinerary: (req, res) => {
    Itinerary.findOneAndDelete({ cityId: req.params.id }).then((itinerary) => {
      if (itinerary) {
        res.json({ success: true });
      } else {
        throw new Error("The itinerary doesn´t exists");
      }
    });
  },
};

module.exports = itinerarisControllers;
