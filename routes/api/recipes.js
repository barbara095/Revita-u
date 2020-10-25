const router = require("express").Router();
const RecipeController = require("../../controller/controller.js");

router
  .route("/")
  .get(RecipeController.findAll)
  .post(RecipeController.create);

router
  .route("/:id")
  .get(RecipeController.findById)
  .put(RecipeController.update)
  .delete(RecipeController.remove);


module.exports = router;
