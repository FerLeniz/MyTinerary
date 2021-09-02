const Itinerary = require("../models/Itinerary");

const itinerariesControllers = {
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
    Itinerary.find({ cityId: req.params.cityId })
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
  getOneItinerary: (req, res) => {
    Itinerary.findOne({ _id: req.params.id })
      .then((itinerary) => {
        if (itinerary) {
          res.json({ success: true, response: itinerary });
        } else {
          throw new Error("Itinerary not found");
        }
      })
      .catch((error) => res.json({ success: false, response: error.message }));
  },
  modifyItinerary: (req, res) => {
    Itinerary.findOneAndUpdate(
      { _id: req.params.id },
      { ...req },
      { new: true }
    )
      .then(() => res.json({ success: true }))
      .catch((err) => res.json({ success: false, response: err.message }));
  },
  deleteItinerary: (req, res) => {
    Itinerary.findOneAndDelete({ cityId: req.params.id })
      .then((itinerary) => {
        if (itinerary) {
          res.json({ success: true });
        } else {
          throw new Error("The itinerary doesn´t exists");
        }
      })
      .catch((err) => res.json({ success: false, response: err.message }));
  },
  likeStatus: async (req, res) => {
    const idItinerar = req.params.id;
    const {
      data: { email },
    } = req.body;

    const user = await Itinerary.findOne({
      _id: idItinerar,
      userLiked: email,
    });
    try {
      if (user) {
        const likeComment = await Itinerary.findOneAndUpdate(
          { _id: idItinerar },
          { $pull: { userLiked: email } },
          { new: true }
        );
        const id = await Itinerary.findById(idItinerar);
        const findLike = await Itinerary.findOneAndUpdate(
          { _id: idItinerar },
          { likes: id.userLiked.length },
          { new: true }
        );
        res.json({
          success: true,
          response: {
            btnStatus: false,
            usersLikes: likeComment.userLiked,
            likes: findLike.likes,
          },
        });
      } else {
        const likeComment = await Itinerary.findOneAndUpdate(
          { _id: idItinerar },
          { $push: { userLiked: email } },
          { new: true }
        );

        const id = await Itinerary.findById(idItinerar);
        const findLike = await Itinerary.findOneAndUpdate(
          { _id: idItinerar },
          { likes: id.userLiked.length },
          { new: true }
        );
        res.json({
          success: true,
          response: {
            btnStatus: true,
            usersLikes: likeComment.userLiked,
            likes: findLike.likes,
          },
        });
      }
    } catch (error) {
      return res.json({ success: false, response: error.message })
    }
  },
  addComment: async (req, res) => {

    const idItinerar = req.params.id
    const idUser = req.user._id
    const { message } = req.body

    try {
        const newComment = await Itinerary.findOneAndUpdate(
            { _id: idItinerar },
            { $push: { comments: { userId: idUser, comment: message } } },
            { new: true }).populate({ path: "comments", populate: { path: "userId", select: { "firstName": 1, "lastName": 1, "email": 1, "userPic": 1 } } })

        newComment.save()
        res.json({ success: true, response: newComment.comments })
    } catch (error) {
        console.log(error)
    }
},
deleteComment: async (req, res) => {
  const idItinerar = req.params.id
  const { id } = req.body
  try {
      const borrarComentario = await Itinerary.findOneAndUpdate(
          { _id: idItinerar },
          { $pull: { comments: { _id: id } } },
          { new: true }).populate({ path: "comments", populate: { path: "userId", select: { "firstName": 1, "lastName": 1, "email": 1, "userPic": 1 } } })
      borrarComentario.save()
      res.json({ success: true, response: borrarComentario.comments })

  } catch (error) {

      console.log(error)
  }

},
editComment: async (req, res) => {
  const idItinerar = req.params.id
  const { idComentario, comment } = req.body
  try {
      const editarComentario = await Itinerary.findOneAndUpdate(
          { _id: idItinerar, "comments._id": idComentario },
          { $set: { "comments.$.comment": comment } },
          { new: true }
      ).populate({ path: "comments", populate: { path: "userId", select: { "firstName": 1, "lastName": 1, "email": 1, "userPic": 1 } } })
      editarComentario.save()
      res.json({ success: true, response: editarComentario.comments })

  } catch (error) {
      console.log(error)
  }
},

};

module.exports = itinerariesControllers;