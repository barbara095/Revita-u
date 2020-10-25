import axios from "axios";

// Recipe Search & Diet API by Edamam allows us to get recipes by searching for a particular ingredient
const recipeURL = "https://edamam-recipe-search.p.rapidapi.com/search";
const recipeAPI = "435f0cdaeamshd0fe4e59b8a1c27p16ae90jsn8bb53a2736cc";

const nutritionURL = "https://rapidapi.p.rapidapi.com/recipes/quickAnswer";


export default {
  searchRecipe: function (query) {
    return new Promise((resolve, reject) => {
      axios
        .get(recipeURL, {
          'headers': {
            "content-type": "application/octet-stream",
            "x-rapidapi-host": "edamam-recipe-search.p.rapidapi.com",
            "x-rapidapi-key": recipeAPI,
            "useQueryString": true,
          },
          "params": { "q": query }
        })
        .then(res => {
          const recipes = res.data.hits;
          const results = recipes.map(({ recipe }) => {
            return {
              title: recipe.label,
              image: recipe.image,
              url: recipe.url,
              source: recipe.source,
              ingredients: recipe.ingredientLines,
              labels: recipe.healthLabels,
              calories: recipe.calories,
              carbs: recipe.totalNutrients.CHOCDF.quantity,
              fat: recipe.totalNutrients.FAT.quantity,
              protein: recipe.totalNutrients.PROCNT.quantity,
              sugar: recipe.totalNutrients.SUGAR.quantity,
              sodium: recipe.totalNutrients.NA.quantity,
            }
          });
          resolve(results);
        })
        .catch(err => reject(err))
    }
    )
  },

  searchNutrition: function(query) {
    return new Promise((resolve, reject) => {
      axios
        .get(nutritionURL, {
          'headers': {
            "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
            "x-rapidapi-key": recipeAPI,
            "useQueryString": true,
          },
          "params": { "q": query }
        })
        .then(res => {
          resolve(res);
        })
        .catch(err => reject(err))
    }
    )
  },

  getRecipes: function () {
    return axios.get("/api/recipes");
  },

  getRecipe: function (id) {
    return axios.get("/api/recipes/" + id);
  },

  deleteRecipe: function (id) {
    return axios.delete("/api/recipes/" + id);
  },

  saveRecipe: function (savedRecipes) {
    return axios.post("/api/recipes", savedRecipes);
  },


  getSubstitutes: function () {
    return axios.get("/api/substitutes");
  },

  getSubstitute: function (id) {
    return axios.get("/api/substitutes/" + id);
  },
};


