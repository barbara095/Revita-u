import React, { useEffect, useState } from "react";
import { Col, Row, Container } from "../Grid";
import { Header } from "semantic-ui-react";
import Wrapper from "../Wrapper";
import CarbSwaps from "../carbSwaps";
import DairySwaps from "../dairySwaps";
import SweetSwaps from "../sweetSwaps";
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
    setIngredients(ingredients);
  }

  return (
    <div className="ingredients-container">
      <Container fluid style={{ minHeight: "100vh" }} >
        <Wrapper className="wrapper-ingredients">

          <div className="ingredients-search">
            What have you swapped out today?
            <Header /> Carbs
            <CarbSwaps
              value={ingredients}
              handleInputChange={handleInputChange}
            />
            <Header /> Dairy
            <DairySwaps
              value={ingredients}
              handleInputChange={handleInputChange}
            />
            <Header /> Sweets
              <SweetSwaps
              value={ingredients}
              handleInputChange={handleInputChange} />
            {/* <IngredientsSearch 
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
          </Row> */}
          </div>
        </Wrapper>
      </Container>
    </div>
  );

};

export default IngredientsContainer;
