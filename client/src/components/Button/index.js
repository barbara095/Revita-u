import React from 'react';
import { Button, Icon } from 'semantic-ui-react';
import './style.css';

function FormBtn(props) {

  return (
    <Button className="recipe.search btn"
        onClick={props}
        className={`button ${props["data-value"]}`} {...props}
        basic-color='teal'
        background='teal'
    > Search
      
    </Button>
  )

}

export default FormBtn;