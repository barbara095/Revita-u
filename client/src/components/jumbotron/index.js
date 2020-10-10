import React from "react";
import SearchForm from "../searchForm";
import FormBtn from "../Button";
import "./style.css";

function Jumbotron() {
  return (
    <div className="jumbotron text-center">
      <h1>Search for recipes by ingredient...</h1>
      {/* <SearchForm />
      <FormBtn /> */}
    </div>
  );
}

export default Jumbotron;