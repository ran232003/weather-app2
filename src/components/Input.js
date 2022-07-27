import React from "react";
import { Form } from "react-bootstrap";

const Input = (props) => {
  const { lable, placeHolder, helperText } = props;
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>{lable}</Form.Label>
        <Form.Control type="text" placeholder={placeHolder} />
        <Form.Text className="text-muted">{helperText}</Form.Text>
      </Form.Group>
    </Form>
  );
};

export default Input;
