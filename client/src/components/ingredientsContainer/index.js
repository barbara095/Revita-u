import React, { useEffect, useState } from "react";
import { Col, Row, Container } from "../Grid";
import { Header } from "semantic-ui-react";
import Wrapper from "../Wrapper";
import CarbSwaps from "../carbSwaps";
import DairySwaps from "../dairySwaps";
import SweetSwaps from "../sweetSwaps";
import Moment from 'react-moment';
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

  const handleFormSubmit = e => {
    e.preventDefault();
    setIngredients(ingredients);

  }

  const dateToFormat = 'D MM YYYY';

  return (
    <div className="ingredients-container">
      <Container fluid style={{ minHeight: "100vh" }} >
        <Wrapper className="wrapper-ingredients">
          
          <div className="substitute">
            <div className="substitute-header">
            What do you want to swap out today?
            </div>
            <CarbSwaps
              value={ingredients}
              handleInputChange={handleInputChange}
            />
            
            <DairySwaps
              value={ingredients}
              handleInputChange={handleInputChange}
            />
            
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
