import React from "react";
import FormBtn from "./components/Button/index";
import { Form } from 'semantic-ui-react';
import "./style.css";

function IngredientsSearch(props) {
  return (
    <form className="search-ingredients">
      <div className="form-group">
        <SearchInput
          id="search"
          name="search"
          type="text"
          className="search-bar"
          placeholder={props.placeholder}
          onChange={props.handleInputChange}
          value={props.search}
        />
      </div>
    </form>
  )

};

export default IngredientsSearch;