import React from "./node_modules/react";
import "./style.css";

function SearchForm(props) {
    return (
        <form>
            <div className="form-group">
                <label>Search</label>
                <input
                    id="search"
                    onChange={props.handleInputChange}
                    value={props.search}
                    name="search"
                    type="text"
                    placeholder="Search for a recipe!"
                />
                <button type="submit" onClick={props.handleFormSubmit} className="btn btn-success">
                    Search
                 </button>
            </div>
        </form>
    )
};

export default SearchForm;