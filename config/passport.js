// const passport = require("passport");
// const jwtStrategy  = require("passport-jwt").Strategy;
// const extractJwt = require("passport-jwt").extractJwt;
// const User = require("../models/User");

// module.exports = passport.use(
//   new jwtStrategy (
//     {
//       jwtFromRequest: extractJwt.fromAuthHeaderAsBearerToken(),
//       secretOrKey: process.env.SECRETORKEY,
//     },
//     (payload, done) => {
//       User.findOne({ _id: payload._doc._id })
//         .then((response) => {
//           if (response) {
//             return done(null, response);
//           } else {
//             return done(null, false);
//           }
//         })
//         .catch((err) => done(err, false));
//     }
//   )
// );
