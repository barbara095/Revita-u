const path = require("path");

module.exports = function(app) {
    // index route loads index.html
    app.get("/", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/index.html"));
    });
  
    // exercise route loads exercise.html
    app.get("/recipes", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/recipes.html"));
    });
  
};