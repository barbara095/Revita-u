import React from "react";
import { Item } from 'semantic-ui-react'

function CardText(props) {
  return (
    <div className="card-text"> 
    <Item.Description>
        <p>{props.ingredients}</p>
        <a href={props.url} target="_blank"></a>
        </Item.Description>
        
    </div>
  );
}

export default CardText;