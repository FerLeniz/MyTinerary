const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const usersController = {
  addNewUser: (req, res) => {
    const { name, lastName, email, url, country, password, google } = req.body;
    var salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
    const newUser = new User({
      name,
      lastName,
      email,
      password: hash,
      url,
      country,
      google
    });
    User.findOne({ email: email })
      .then((obj) => {
        if (obj) {
          throw new Error("User exits,try with another one.");
        }
      })
      .then(() => {
        newUser.save();
        const token =jwt.sign({ ...newUser }, process.env.SECRETORKEY)
        res.json({ success: true,response:{token,name: newUser.name, url: newUser.url} ,response: null, });
      })
      .catch((err) => res.json({ success: false, response: err.message }));
  },
  logUser: (req, res) => {
    const { email, password,flagGoogle } = req.body;
    User.findOne({ email: email })
      .then((user) => {
        if (!user) {
          throw new Error("Mail and/or password are incorrect");
        }
        if(user.google && !flagGoogle){
          throw new Error("You  have a Google´s account,please log in there");
        }
        let value = bcrypt.compareSync(password, user.password);
        if (!value) {
          throw new Error("Mail and/or password are not correct");
        }
        const token = jwt.sign({ ...user }, process.env.SECRETORKEY);
        res.json({
          success: true,
          response: { token, name: user.name, url: user.url },
          error: null,
        });
      })
      .catch((err) => res.json({ success: false, error: err.message }));
  },
  verifyToken:(req,res)=>{
   return res.json({ name: req.user.name, url: req.user.url })
  }
};

module.exports = usersController;
