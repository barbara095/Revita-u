import React, { useEffect, useState } from "react";
import { Col, Row, Container } from "../Grid";
import Wrapper from "../Wrapper";
import SearchForm from "../searchForm";
import RecipeCard from "../Card";
import FormBtn from "../Button";
import API from "../../utils/API";

function IngredientsContainer() {

  const [ingredients, setIngredients] = useState([]);
  const [searchIngredients, setSearch] = useState("");
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [description, setDescription] = useState("");
  
  
  const handleInputChange = e => {
    const { value } = e.target;
    setSearch(value);
  }

  useEffect(() => {
    if (!ingredients) {
      return;
    }

  }, [ingredients]);

  const handleFormSubmit = e => {
    e.preventDefault();

    API.searchIngredient(searchIngredients)
    .then(res => {
      if (res.data.length === 0) {
        throw new Error("No ingredients found");
      }
      if (res.data.status === "error") {
        throw new Error(res.data.message);
      }
      console.log(res.data);
      setIngredients(res.data);
      setTitle(res.data.title);
    })
    .catch(err => console.log(err));
  }

  return (
    <>
    <Container fluid style={{ minHeight: "100vh" }} >
      <Wrapper className="wrapper-recipe">
      <Row>
        <Col size="sm-8">
          <SearchForm
            value={searchIngredients}
            onChange={handleInputChange}
            placeholder="What food would you like to substitute?"
          />
          <FormBtn
            onClick={handleFormSubmit}
            type="success"
          >
          </FormBtn>
        </Col>
      </Row>
      <Col size="sm-6">
            {/* <RecipeCard>
              {recipes.map(recipe => { 
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

            </RecipeCard> */}
      </Col>
      </Wrapper>
    </Container>
    </>
  );

};

export default IngredientsContainer;
