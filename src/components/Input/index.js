import React from "react";
import FormBtn from "./components/Button/index";
import { Form } from 'semantic-ui-react';
import "./style.css";

function Input(props) {
    return (
    <Form loading>
      <Form.Input label='search' type="text" {...props} />
      <FormBtn>Submit</FormBtn>
    </Form>
  )
  
};

export default Input;