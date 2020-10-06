import React from "react";
import { SearchInput } from 'evergreen-ui';
import "./style.css";

function SearchForm(props) {
    return (
        <form className="search">
            <div className="form-group">
                <label>{props.label}</label>
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

export default SearchForm;