import axios from "axios";
// Recipe - Food - Nutrition API allows us to get recipes by searching for a particular ingredient
const BASEURL = "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients";
const APIKEY = "435f0cdaeamshd0fe4e59b8a1c27p16ae90jsn8bb53a2736cc";

export default {
  search: function(query) {
    return axios.get(BASEURL + query + APIKEY);
  }
};