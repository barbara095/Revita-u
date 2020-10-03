import React from "react";

const RecipeContext = React.createContext({
  title: "",
  url: "",
  image: ""
});

export default RecipeContext;