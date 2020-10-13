import React from "react";
import SearchForm from "../searchForm";
import FormBtn from "../Button";
import "./style.css";

function Jumbotron() {
  return (
    <div className="jumbotron">
      <h1 className="jumbotron-header">Search for recipes by ingredient...</h1>
      {/* <SearchForm />
      <FormBtn /> */}
    </div>
  );
}

export default Jumbotron;