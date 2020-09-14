// Requiring Express and mongoose
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

// Requiring express session to handle unique sessions
// const session = require("express-session");

// Requiring passport as we've configured it
// const passport = require("./config/passport");

const PORT = process.env.PORT || 8080;

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// We need to use sessions to keep track of our user's login status
// app.use(
//   session({ secret: "keyboard cat", resave: true, saveUninitialized: true })
// );
// app.use(passport.initialize());
// app.use(passport.session());


// Accessing public directory
app.use(express.static("public"));

// Requiring our routes
app.use(require("./routes/api-routes.js"));
app.use(require("./routes/html-routes.js"));

mongoose.connect(process.env.MONGODB_URI || 
    "mongodb://localhost/revita-u", { 
      useNewUrlParser: true, 
      useUnifiedTopology: true, 
      useFindAndModify: false },
    );


// Start the server
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});