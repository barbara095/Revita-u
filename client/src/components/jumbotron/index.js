import React from "react";
import Jumbotron from 'react-bootstrap/Jumbotron';
import "./style.css";

function JumbotronCont() {
  return (
    <div className="jumbotron">
      <Jumbotron> 
      <h1 className="jumbotron-header">Search for recipes by ingredient...</h1>
      </Jumbotron>
    </div>
  );
}

export default JumbotronCont;