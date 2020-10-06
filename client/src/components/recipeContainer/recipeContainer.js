import React, { useEffect, useState } from "react";
import { Col, Row, Container } from "../Grid";
import Wrapper from "../Wrapper";
import SearchForm from "../searchForm";
import Card from "../Card";
import RecipeResults from "../recipeResults";
import { Grid } from 'semantic-ui-react';
import FormBtn from "../Button";
import API from "../../utils/API";
import './style.css';

function RecipeContainer() {

  const [recipes, setRecipes] = useState([]);
  const [searchRecipes, setSearch] = useState("");
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [description, setDescription] = useState("");
  
  
  const handleInputChange = e => {
    setSearch(e.target.value);
  }

  useEffect(() => {
    if (!recipes) {
      return;
    }

  }, [recipes]);

  const handleFormSubmit = e => {
    e.preventDefault();
    
    console.log(searchRecipes);
    API.searchRecipe(searchRecipes)
    .then(res => {
      if (res.data.length === 0) {
        throw new Error("No recipes found");
      }
      if (res.data.status === "error") {
        throw new Error(res.data.message);
      }
      console.log(res.data);
      setRecipes(res.data);
      setTitle(res.data.title);
    })
    .catch(err => console.log(err));
  }

  return (
    <>
    <Container fluid style={{ minHeight: "100vh" }} className="container-recipe">
      <Wrapper className="wrapper-recipe">
        <div className="recipe-search-form">
      <Row>
        <Col size="sm-8">
          <SearchForm
            value={searchRecipes}
            onChange={handleInputChange}
            placeholder="Search recipes by ingredient!"
          />
          <FormBtn
            onClick={handleFormSubmit}
            type="success"
          >
          </FormBtn>
        </Col>
      </Row>
      </div>
      <Col size="sm-6">
            <Card>
              {recipes.map(recipe => { 
                console.log(recipes);
                return (
                 
                  <RecipeResults
                    results={recipes}
                    key={recipe.title}
                    title={recipe.title}
                    // url={recipe.url}
                    // source={recipe.source}
                  />
                )}
              )}

            </Card>
      </Col>
      </Wrapper>
    </Container>
    </>
  );

};

export default RecipeContainer;
