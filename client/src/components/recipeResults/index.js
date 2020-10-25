import React from "react";
import "./style.css";

function RecipeResults(props) {
  return (
    <div className="recipe-results">
      <ul className="list-group search-results">
        {props.results.map(recipe => (
          <li key={recipe.title} className="list-group-item">
            <h2 className="recipe-title">{recipe.title}</h2>
            <img src={recipe.image} className="img-fluid" />
              <div className="recipe-text">
                  <a href={recipe.url}>{props.url}</a>
                  <p className="recipe-link">Link: {recipe.url}</p>
                  <p className="recipe-source">Source: {recipe.source}</p>
                  <h3>Ingredients:</h3>
                  <p>{recipe.ingredients}</p>
                  <p>Health Labels: {recipe.labels}</p>
                  <h3>Nutritional Information</h3>
                  <p>Calories: {recipe.calories}</p>
                  <p>Carbs: {recipe.carbs}</p>
                  <p>Fat: {recipe.fat}</p>
                  <p>Protein: {recipe.protein}</p>
                  <p>Sugar: {recipe.sugar}</p>
                  <p>Sodium: {recipe.sodium}</p>
              </div>
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
          </li>
        ))}
      </ul>

    </div>
  );
}

export default RecipeResults;