const mongoose = require("mongoose");

const itinerarySchema = new mongoose.Schema({
  name: { type: "String", required: true },
  imagePerson: { type: "String" },
  imagePlace: { type: "String" },
  sentence: { type: "String", required: true },
  price: { type: "Number" },
  likes: { type: "Number", default: 0 },
  duration: { type: "String" },
  hashtags: [String],
  comments: { type: "Array" },
  cityId: { type: mongoose.Types.ObjectId, ref: "city" },
});

const Itinerary = mongoose.model("itinerary", itinerarySchema);
module.exports = Itinerary;
