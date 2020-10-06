import React from 'react';
import { List, Item, Image } from 'semantic-ui-react';
import CardImg from '../CardImage';
import CardTitle from '../CardTitle';
import CardText from '../CardText';


function Card({children, title, image, ingredients, url}) {
  
  return(
    <List className="list-recipes">{children}
    <Item.Group>
    <Item>
    <Image/>
      <CardImg src={image || "https://placehold.it/400x400"} />
      <Item.Content>
        <CardTitle title={title}/>
        <Item.Description >
          <CardText url={url} 
                    ingredients={ingredients}/>
        </Item.Description>
      </Item.Content>
    </Item>
    </Item.Group>
    </List>
  )
}

export default Card;