import React, { useState } from "react";
import MultiSelect from "react-multi-select-component";
import "./style.css";
import { Dropdown, Header, Menu } from "semantic-ui-react";

export const substitute = [
  { key: 'White pasta', text: 'White pasta', value: 'White pasta' },
  { key: 2, text: 'Potatoes', value: 2 },
  { key: 3, text: 'Butter', value: 3 },
  { key: 4, text: 'Cereal', value: 4 },
  { key: 5, text: 'Cheese', value: 5 },
  { key: 6, text: 'Noodles', value: 6 },
  { key: 7, text: 'Sugar', value: 7 },
  { key: 8, text: 'White rice', value: 8 },
  { key: 9, text: 'Flour', value: 9 },
  { key: 10, text: 'Mayonnaise', value: 10 },
  { key: 11, text: 'Cream', value: 11 },
  { key: 12, text: 'Eggs', value: 12 },
  { key: 13, text: 'Peanut Butter', value: 13 },
  { key: 14, text: 'Cow`s milk', value: 14 },
  { key: 15, text: 'French fries', value: 15 },
  { key: 16, text: 'Ice cream', value: 16 },
]

export const diet = [
  { key: 1, text: 'Pescetarian', value: 1 },
  { key: 2, text: 'Vegetarian', value: 2 },
  { key: 3, text: 'Vegan', value: 3 },

]

export const allergies = [
  { key: 1, text: 'Lactose Intolerance', value: 1 },
  { key: 2, text: 'Egg Allergy', value: 2 },
  { key: 3, text: 'Fish Allergy', value: 3 },
  { key: 4, text: 'Sesame Allergy', value: 4 },
  { key: 5, text: 'Mustard Allergy', value: 5 },
  { key: 6, text: 'Nut Allergy', value: 6 },
  { key: 7, text: 'Peanut Allergy', value: 7 },
  { key: 8, text: 'Soya Allergy', value: 8 },
  { key: 9, text: 'Sulphites Allergy', value: 9 },

]

function DropDown() {
  return (
    <Menu compact>
      <Dropdown 
        text='Any diets?' 
        options={substitute} 
        fluid search selection />
    </Menu>
    // <Menu compact>
    //   <Dropdown text='Any diets?' options={diet} simple item />
    // </Menu>

    // <Menu compact>
    //   <Dropdown text='Any allergies?' options={allergies} simple item />
    // </Menu>
    
  )
}

export default DropDown;