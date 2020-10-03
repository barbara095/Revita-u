import React from "react";
import "./style.css";
import { Item } from 'semantic-ui-react';

function CardTitle({ title }) {
  return (
    <div className="card-title">
      <Item.Header title={title} />
    </div>
  );
}

export default CardTitle;
