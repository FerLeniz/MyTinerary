const Activity = require("../models/Activity");

const activitiesController = {
  addNewActivity: (req, res) => {
    const activityToLoad = new Activity({ ...req.body });
    activityToLoad
      .save()
      .then(() => res.json({ success: true }))
      .catch((err) => res.json({ success: true, error: err }));
  },
  getSpecificActivities: (req, res) => {
    Activity.find({itineraryId: req.params.itineraryId})
      .populate("itineraryId")
      .then((activity) => {
        if (activity.length > 0) {
          res.json({ success: true, response: activity });
        } else {
          throw new Error("There are not itineraries");
        }
      })
      .catch((err) => res.json({ success: false, response: err.message }));
  },

};

module.exports = activitiesController;
