import React, { useEffect, useState, Component } from "react";
import { Col, Row, Container } from "../Grid";
import Wrapper from "../Wrapper";
import SearchForm from "../searchForm";
import RecipeResults from "../recipeResults";
import JumbotronCont from "../jumbotron";
import FormBtn from "../Button";
import API from "../../utils/API";
import './style.css';

function RecipeContainer(props) {

  const [recipes, setRecipes] = useState([]);
  const [searchRecipes, setSearch] = useState("");
  const [title, setTitle] = useState([""]);
  const [url, setUrl] = useState([""]);
  const [ingredients, setIngredients] = useState([""]);

  const handleInputChange = e => {
    const { value } = e.target;
    setSearch(value);
  }

  const handleFormSubmit = e => {
    e.preventDefault();
    

    API.searchRecipe(searchRecipes)
      .then(recipes => {
        console.log(recipes);
        if (recipes.length === 0) {
          throw new Error("No recipes found");
        }
        setRecipes(recipes);
        setTitle(recipes.title);
        setUrl(recipes.url);
        setIngredients(recipes.ingredients)
      })
      .catch(err => console.log(err));
  };

  const handleSaved = id => {

    let recipeSaved = recipes.filter(
      (recipe) => recipe.id === id
    );
    console.log(recipeSaved);

    API.saveRecipe({
        recipeId: recipeSaved.id,
        title: recipeSaved.title,
        image: recipeSaved.image,
        url: recipeSaved.url,
        source: recipeSaved.source,
        ingredients: recipeSaved.ingredientLines,
        labels: recipeSaved.healthLabels,
        calories: recipeSaved.calories,
        // carbs: recipeSaved.totalNutrients.CHOCDF.quantity,
        // fat: recipeSaved.totalNutrients.FAT.quantity,
        // protein: recipeSaved.totalNutrients.PROCNT.quantity,
        // sugar: recipeSaved.totalNutrients.SUGAR.quantity,
        // sodium: recipeSaved.totalNutrients.NA.quantity,
      }).then(() => handleFormSubmit.bind(this));
      
  };

  return (
    <div className="recipe-container">
      <JumbotronCont />
      <Container fluid style={{ minHeight: "100vh" }} className="container-recipe">
        <Wrapper>
          <div className="recipe-search-form">
        
            <SearchForm
              value={recipes}
              handleInputChange={handleInputChange}
              placeholder="Search recipes by ingredient!"
            />
            <FormBtn
              onClick={handleFormSubmit}
              type="success"
              basic color="teal"
            >
            </FormBtn>

            <Row>
              <Col size="sm-6">
                
                  <RecipeResults
                    results={recipes}
                    title={title}
                    url={url}
                    ingredients={ingredients}
                    handleSaved={handleSaved}
                  />
                
              </Col>
            </Row>
          </div>

        </Wrapper>
      </Container>
    </div>
  )


};

export default RecipeContainer;
