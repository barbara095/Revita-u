import React from 'react';
import { Button, Icon } from 'semantic-ui-react';

function FormBtn(props) {

  return (
    <Button
        onClick={props}
        className={`button ${props["data-value"]}`} {...props}
        basic-color='teal'
    > 
      
    </Button>
  )

}

export default FormBtn;