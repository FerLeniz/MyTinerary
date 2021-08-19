const Itinerary = require("../models/Itinerary");

const itinerarisControllers = {
  addItinerary: (req, res) => {
    const itineraryToLoad = new Itinerary({ ...req.body });
    itineraryToLoad
      .save()
      .then(() => res.json({ success: true }))
      .catch((err) => res.json({ success: false, error: err }));
  },
  getAllItineraries: (rep, res) => {
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
};

module.exports = itinerarisControllers;
