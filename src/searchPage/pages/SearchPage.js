import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import Input from "../../components/Input";
import { autoComplete } from "../../helpers/apiCalls";
import { getAutoCompleteArray } from "../../helpers/helperFunc";
import { weatherActions } from "../../store/weatherSlice";
import "./SearchPage.css";
const SearchPage = (props) => {
  const dispatch = useDispatch();
  const [input, setInput] = useState({
    search: "",
    valid: false,
  });
  const handleInput = async (inputObject) => {
    setInput(inputObject);
    const result = await autoComplete(inputObject.search);
    if (result === "error") {
    } else {
      console.log(result);
      const arrayResult = getAutoCompleteArray(result);
      console.log(arrayResult);
      dispatch(weatherActions.setAutoComplete(arrayResult));
    }
  };
  const handleSubmit = () => {};
  console.log(input);
  return (
    <div>
      <div className="searchInput">
        <Input
          inputName="search"
          helperText="choose a city."
          placeHolder="Enter City"
          handleInput={handleInput}
        />
        <Button onClick={handleSubmit}>Search</Button>
      </div>
    </div>
  );
};

export default SearchPage;
