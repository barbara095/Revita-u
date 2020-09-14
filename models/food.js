const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const foodSchema = new Schema( 
  {
    food: [
      {
        //  type of food (i.e.: veges, grains, dairy)
        type: {
            String,  
            trim: true,
          }
      },
      {
        //  name of the food
        name: {
          type: String,
          trim: true,
          required: "Please enter a food"
        }
      },
        //  nutrition information
      {
        calories: {
            type: Number,
            trim: true,
        } 
      },
      {
        carbs: {
            type: Number,
            trim: true,
        } 
      },
      {
        protein: {
            type: Number,
            trim: true,
        } 
      },
      {
        sugar: {
            type: Number,
            trim: true,
        } 
      },
      {
        fat: {
            type: Number,
            trim: true,
        } 
      },
      {
        sodium: {
            type: Number,
            trim: true,
        } 
      }
    ],
    
    date: {
        type: Date,
        default: Date.now
    }
  }
);

const Food = mongoose.model("Food", foodSchema);

module.exports = Food;