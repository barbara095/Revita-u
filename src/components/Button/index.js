import React from 'react';
import { Button } from 'semantic-ui-react';

function FormBtn(props) {

  return (
    <Button 
        onClick={props.onClick} 
        className={`ui button ${props["data-value"]}`} {...props} 
        inverted color='black'
    />
  )

}

export default FormBtn;