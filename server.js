// Requiring Express and mongoose
const express = require("express");
const logger = require("morgan");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const routes = require("./routes");
// Requiring express session to handle unique sessions
// const session = require("express-session");

// Requiring passport as we've configured it
// const passport = require("./config/passport");

const PORT = process.env.PORT || 8080;

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(routes);
// We need to use sessions to keep track of our user's login status
// app.use(
//   session({ secret: "keyboard cat", resave: true, saveUninitialized: true })
// );
// app.use(passport.initialize());
// app.use(passport.session());


// Accessing public directory
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/public"));
}

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/public/index.html"));
});

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