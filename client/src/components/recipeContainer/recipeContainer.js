import React, { useEffect, useState, Component } from "react";
import { Col, Row, Container } from "../Grid";
import axios from 'axios';
import Wrapper from "../Wrapper";
import SearchForm from "../searchForm";
import RecipeResults from "../recipeResults";
import JumbotronCont from "../jumbotron";
import FormBtn from "../Button";
import API from "../../utils/API";
import './style.css';

function RecipeContainer() {

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

  const handleSaved = e => {
    e.preventDefault();
    console.log(recipes)

    let savedRecipes = recipes.filter(
      (recipe) => recipe.id === e.target.id
    );
    savedRecipes = savedRecipes[0];

    API.saveRecipe(savedRecipes)
      .then((response) => console.log(response));
      
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
              placeholder="Search"
            />
            <FormBtn
              onClick={handleFormSubmit}
              type="success"
              basic color="teal"
            >Search
            </FormBtn>

              <Col size="sm-6">
                  <RecipeResults
                    results={recipes}
                    title={title}
                    url={url}
                    ingredients={ingredients}
                    handleSaved={handleSaved}
                  />
              </Col>
          </div>

        </Wrapper>
      </Container>
    </div>
  )


};

export default RecipeContainer;
