const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const recipeSchema = new Schema(
    {
        name: {
            type: String,
            trim: true,
            unique: true,
        },
        food: [
            {
                type: Schema.Types.ObjectId,
                ref: "Food"
            }
        ],
        date: {
            type: Date,
            default: Date.now
        }
    }
);

const Recipe = mongoose.model("Recipe", recipeSchema);

module.exports = Recipe;