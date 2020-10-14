const router = require("express").Router();
const RecipeController = require("../../controller/controller.js");

// Matches with "/api/books"
router.route("/")
  .get(booksController.findAll)
  .post(booksController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(booksController.findById)
  .put(booksController.update)
  .delete(booksController.remove);

module.exports = router;
// const router = require("express").Router();
// const Recipe = require("../../models/recipes.js");
// const axios = require("axios");
// const { query } = require("express");

// router.post("/api/recipes", ({ body }, res) => {
//   Recipe.create(body)
//     .then(dbRecipe => {
//       res.json(dbRecipe);
//     })
//     .catch(err => {
//       res.status(400).json(err);
//     });
// });

// router.post("/api/recipes/bulk", ({ body }, res) => {
//   Recipe.insertMany(body)
//     .then(dbRecipe => {
//       res.json(dbRecipe);
//     })
//     .catch(err => {
//       res.status(400).json(err);
//     });
// });

// router.get("/api/recipes", (req, res) => {
//   Recipe.find({})
//     .sort({ date: -1 })
//     .then(dbRecipe => {
//       res.json(dbRecipe);
//     })
//     .catch(err => {
//       res.status(400).json(err);
//     });
// });

// router.get("/api/search-ingredient", (req, res) => {
//   axios
//   .get('https://bon-api.com/api/v1/ingredient/alternatives/' + query, {
//       'headers': {
//         'Authorization': 'Token' + "3112184fd50f665cccb860f7e34f8ae55ebc2ece",
//       }
//   })
// })

// module.exports = router;
