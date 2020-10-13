import React, { useEffect, useState } from "react";
import { Col, Row, Container } from "../Grid";
import Card from "../Card";
import Wrapper from "../Wrapper";
import { substitute, diet, allergies } from "../Dropdown";
import DropDown from "../Dropdown";
import IngredientsSearch from "../ingredientsSearch";
import IngredientsResults from "../ingredientsResults";
import SearchForm from "../searchForm";
import FormBtn from "../Button";
import API from "../../utils/API";
import './style.css';

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

    console.log(searchIngredients)
    API.searchIngredient(searchIngredients)
      .then(ingredients => {
        console.log(ingredients);
        if (ingredients.length === 0) {
          throw new Error("No ingredients found");
        }
        setIngredients(ingredients);
        // setTitle(res.data.title);
      })
      .catch(err => console.log(err));
  }

  return (
    <div className="ingredients-container">
      <Container fluid style={{ minHeight: "100vh" }} >
        <Wrapper className="wrapper-ingredients">
          
          <div className="ingredients-search">

            <IngredientsSearch 
              value={ingredients}
              handleInputChange={handleInputChange}
              placeholder="What food would you like to substitute?"
            />
            <FormBtn
              onClick={handleFormSubmit}
              type="success"
            >
            </FormBtn>
            <DropDown />
            
          <Row>
            <Col size="sm-6">
              <Card>
                
                <IngredientsResults
                  results={ingredients}
                  
                />
              </Card>
            </Col>
          </Row>
          </div>
        </Wrapper>
      </Container>
    </div>
  );

};

export default IngredientsContainer;
