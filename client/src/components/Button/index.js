import React from 'react';
import { Button, Icon } from 'semantic-ui-react';

function FormBtn(props) {

  return (
    <Button animated
        onClick={props}
        className={`button ${props["data-value"]}`} {...props}
    > 
      <Button.Content visible>Search</Button.Content>
      <Button.Content hidden>
        <Icon name='search' />
      </Button.Content>
    </Button>
  )

}

export default FormBtn;