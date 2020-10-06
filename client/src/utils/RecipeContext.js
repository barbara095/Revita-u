import React from "react";

const RecipeContext = React.createContext({
  title: "",
  description: "",
  url: "",
  image: "",

});

export default RecipeContext;