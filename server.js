// Requiring Express and mongoose
const express = require("express");
const logger = require("morgan");
const path = require("path");
const cors = require('cors')
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
// Requiring express session to handle unique sessions
const session = require("express-session");
// Requiring passport as we've configured it
const passport = require("./config/passport");

const PORT = process.env.PORT || 8080;

const app = express();

app.use(logger("dev"));

// app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(routes);

// Allows CORS policy to run https request

// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "https://bon-api.com/api/v1/ingredient-alternatives/");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });

// // Using sessions to keep track of our user's login status
app.use(
  session({ secret: "jeffrey-poukamiso", resave: true, saveUninitialized: true })
);
// app.use((req, res, next) => {
//   console.log('req.session', req.session);
//   return next();
// })
app.use(passport.initialize());
app.use(passport.session());

// Accessing public directory
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// Requiring our routes
// app.use(require("./routes/api/api-routes.js"));
// app.use(require("./routes/html-routes.js"));

mongoose.connect(process.env.MONGODB_URI ||
    "mongodb://localhost/revitau", 
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    },
    );


// Start the server
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});