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
    ],
    
    date: {
        type: Date,
        default: Date.now
    }
  }
);

const Food = mongoose.model("Food", foodSchema);

module.exports = Food;