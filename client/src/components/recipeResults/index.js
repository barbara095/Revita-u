import React from "react";
import "./style.css";


function RecipeResults(props) {
  return (
    <div className="recipe-results">
      <ul className="list-group search-results">
        {props.results.map(recipe => (
          <li key={recipe.title} className="list-group-item">
            <div className="save-buttons">
            <button className="saveRecipe btn btn-primary"
                id={props.id} 
                onClick={props.handleSaved}
                >Save
            </button>
            <a href="/saved">
            <button className="viewSavedBtn btn btn-light ml-auto mr-3">
                View Saved Recipes
                </button>
            </a>
            </div>
            <h2 className="recipe-title">{recipe.title}</h2>
            <img src={recipe.image} className="img-fluid" />
              <div className="recipe-text">
                  <a href={recipe.url}>{props.url}</a>
                  <p className="recipe-link">Link: {recipe.url}</p>
                  <p className="recipe-source">Source: {recipe.source}</p>
                  <h3 className="nutri-ingredients">Ingredients:</h3>
                  <p>{recipe.ingredients}</p>
                  <p>Health Labels: {recipe.labels}</p>
                  <h3 className="nutri-ingredients">Nutritional Information</h3>
                  <p>Calories: {Math.round(recipe.calories)}</p>
                  <p>Carbs: {Math.round(recipe.carbs)}g</p>
                  <p>Fat: {Math.round(recipe.fat)}g</p>
                  <p>Protein: {Math.round(recipe.protein)}g</p>
                  <p>Sugar: {Math.round(recipe.sugar)}g</p>
                  <p>Sodium: {Math.round(recipe.sodium)}mg</p>
              </div>
            
          </li>
        ))}
      </ul>

    </div>
  );
}

export default RecipeResults;