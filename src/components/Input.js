import React, { useState } from "react";
import { Form } from "react-bootstrap";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useSelector } from "react-redux";

const Input = (props) => {
  const { lable, inputName, placeHolder, helperText } = props;
  const [input, setInput] = useState({
    [inputName]: "",
    valid: false,
  });
  const weatherOptions = useSelector((state) => {
    return state.weather;
  });
  const [optionsArray, setOptionsArray] = useState([]);
  const top100Films = [];
  const handleChange = (event) => {
    console.log(event.target.value);
    let val = event.target.value;
    let obj = {};
    if (val.length > 0) {
      obj = { valid: true, [inputName]: val };
      setInput(obj);
    } else {
      obj = { valid: true, [inputName]: val };
      setInput(obj);
    }
    props.handleInput(obj);
  };
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>{lable}</Form.Label>
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={top100Films}
          renderInput={(params) => (
            <TextField
              {...params}
              label={placeHolder}
              onChange={handleChange}
            />
          )}
        />
        <Form.Text className="text-muted">{helperText}</Form.Text>
      </Form.Group>
    </Form>
  );
};

export default Input;
