import React, { Fragment, useState } from "react";
import { Form } from "react-bootstrap";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useDispatch, useSelector } from "react-redux";

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
  const weatherArray = useSelector((state) => {
    return state.weather.autoComplete;
  });
  const handleChange = (event, value) => {
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
  const finalValue = (event, value) => {
    props.handleSubmit(value);
  };
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>{lable}</Form.Label>
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={weatherArray}
          getOptionSelected={(option) => props.handleInput(option)}
          getOptionLabel={(option) => option.fullName}
          onChange={finalValue}
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
