import React from "react";
import Dropdown from "../Dropdown";
import SearchInput from '../searchForm';
import { Form } from 'semantic-ui-react';
import "./style.css";

function IngredientsSearch(props) {
  return (
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
        {/* <Dropdown /> */}
      </div>
  )

};

export default IngredientsSearch;