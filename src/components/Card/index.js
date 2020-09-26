import React from 'react';
import { Image, Item } from 'semantic-ui-react';
import CardImg from './CardImage';
import CardTitle from './CardTitleText';

function Card() {

  return(
    <Item.Group>
    <Item>
      <CardImg />
      <Item.Content>
        <CardTitle />
        <Item.Meta>Description</Item.Meta>
        <Item.Description>
          <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
        </Item.Description>
        <Item.Extra>Additional Details</Item.Extra>
      </Item.Content>
    </Item>
    </Item.Group>
  )
}

export default Card;