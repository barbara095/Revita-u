import React from 'react';

const CardImg = ({image}) => (
  <div>
      <img className="card-img" src={image} alt="user thumbnail" />
      {!image && <i className="fa fa-spinner fa-spin" aria-hidden="true" />}
    </div>
)

export default CardImg;