const router = require("express").Router();
const recipeRoutes = require("./recipes");

// API Routes
router.use("/recipes", recipeRoutes);

module.exports = router;
