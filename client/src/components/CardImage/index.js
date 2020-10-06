import React from 'react';
import { Item, Image } from 'semantic-ui-react';

const CardImg = ({image}) => (
  <div className="card-img">
    <Item.Image size='small' src={image}  />
      {!image && <i className="fa fa-spinner fa-spin" aria-hidden="true" />}
    </div>
)

export default CardImg;