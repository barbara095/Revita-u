const router = require("express").Router();
const Recipe = require("../../models/recipes.js");

router.post("/api/recipes", ({ body }, res) => {
  Recipe.create(body)
    .then(dbRecipe => {
      res.json(dbRecipe);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.post("/api/recipes/bulk", ({ body }, res) => {
  Recipe.insertMany(body)
    .then(dbRecipe => {
      res.json(dbRecipe);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/api/recipes", (req, res) => {
  Recipe.find({})
    .sort({ date: -1 })
    .then(dbRecipe => {
      res.json(dbRecipe);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

module.exports = router;
