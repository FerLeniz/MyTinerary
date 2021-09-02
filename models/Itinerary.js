const mongoose = require("mongoose");

const itinerarySchema = new mongoose.Schema({
  name: { type: "String", required: true },
  imagePerson: String,
  imagePlace: String,
  title:String,
  sentence: { type: "String", required: true },
  price: Number,
  likes: { type: "Number", default: 0 },
  userLiked: [{ type: String }],
  duration: { type: "String" },
  hashtags: [String],
  comments: [{ userId:{type:mongoose.Types.ObjectId, ref:'user' }, comment: { type: String } }],
  cityId: { type: mongoose.Types.ObjectId, ref: "city" },
});

const Itinerary = mongoose.model("itinerary", itinerarySchema);
module.exports = Itinerary;
