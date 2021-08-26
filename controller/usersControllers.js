const User = require("../models/User");
const bcrypt = require("bcryptjs");

const usersController = {
  addNewUser: (req, res) => {
   
    const { name, lastName, email, url, country,password } = req.body;
    // var salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, 10);
    const newUser = new User({
      name,
      lastName,
      email,
      password:hash,
      url,
      country,
    });

    User.findOne({ email: email })
      .then((obj) => {
        if (obj) {
          throw new Error("User exits,try with another one.");
        }
      })
      .then(() => {
        newUser.save();
        res.json({ success: true });
      })
      .catch((err) => res.json({ success: false, error: err.message }));
  },
  logUser: (req, res) => {
    const { email, password } = req.body;
    User.findOne({ email: email })
      .then((user) => {
        if (!user) {
          throw new Error("Mail and/or password are incorrect");
        }
        let value=bcrypt.compareSync(password, user.password)
        if (!value) {
          throw new Error("Mail and/or password are ");
        }
        res.json({ success: true, response: email.email });
      })
      .catch((err) => res.json({ success: false, error: err.message }));
  },
};

module.exports = usersController;
