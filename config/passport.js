const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const User = require('../models/user');

// Telling passport to use Local Strategy to login with a username/email and password
passport.use(
  new LocalStrategy(
    // Our user will sign in using an email, rather than a "username"
    {
      usernameField: 'username'
    },
    (username, password, done) => {
      // When a user tries to sign in this code runs
      User.findOne({
        where: {
          'username': username
        }
      }).then(User => {
        // If there's no user with the given email
        if (!User) {
          return done(null, false, {
            message: "Incorrect email."
          });
        }
        // If there is a user with the given email, but the password the user gives us is incorrect
        else if (!User.validPassword(password)) {
          return done(null, false, {
            message: "Incorrect password."
          });
        }
        // If none of the above, return the user
        return done(null, User);
      });
    }
  )
);

// In order to help keep authentication state across HTTP requests,
// Mongoose needs to serialize and deserialize the user
passport.serializeUser((user, cb) => {
  console.log('SerializeUser called, user: ')
  console.log(user);
  cb(null, { _id: user._id });
});

passport.deserializeUser((id, cb) => {
  console.log('DesrializeUser called')
  User.findOne(
    { _id: id },
    'username', (err, user) => {
      console.log('Deserialize user, user: ')
      console.log(user)
      cb(null, id);
    }
  )
 
});

// Exporting our configured passport
module.exports = passport;
