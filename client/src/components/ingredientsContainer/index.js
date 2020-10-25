import React, { useState } from "react";
import { Col, Row, Container } from "../Grid";
import CarbSwaps from "../carbSwaps";
import DairySwaps from "../dairySwaps";
import SweetSwaps from "../sweetSwaps";
import SearchForm from "../searchForm";
import FormBtn from "../Button";
import Nutrition from "../nutritionQuestion";
import API from "../../utils/API";
import './style.css';

function IngredientsContainer() {

  const [nutrition, setNutrition] = useState([]);
  const [answer, setAnswer] = useState("");
  const [image, setImage] = useState([""]);

  const handleInputChange = e => {
    const { value } = e.target;
    setNutrition(value);
  }

  const handleFormSubmit = e => {
    e.preventDefault();

    API.searchNutrition(nutrition)
      .then(res => {
        console.log(res.data);
        if (res.data.length === 0) {
          throw new Error("No recipes found");
        }
        setAnswer(res.data.answer);
        setImage(res.data.image);

      })
      .catch(err => console.log(err));
  };

  return (
    <div className="ingredients-container">
      <Container fluid style={{ minHeight: "100vh" }} >
        <div className="substitute">
          <div className="nutrition-header">
            What do you want to swap out today?
        </div>
          <CarbSwaps
          />
          <DairySwaps
          />
          <SweetSwaps
          />
  
      <div className="nutrition-container">
        <div className="nutrition-header">
          Ask your nutritional questions to Revita U HQ
        </div>
        <SearchForm
          value={nutrition}
          handleInputChange={handleInputChange}
          placeholder="Search"
        />
        <FormBtn
          onClick={handleFormSubmit}
          className="nutrition-btn"
          type="success"
          basic color="black"
        />
        <Nutrition
          answer={answer}
          image={image}
        />
      </div>
      </div>
      </Container>
    </div>
  );

};

export default IngredientsContainer;
