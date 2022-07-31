import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import Input from "../../components/Input";
import { autoComplete, currentLocationApi } from "../../helpers/apiCalls";
import { getAutoCompleteArray } from "../../helpers/helperFunc";
import { weatherActions } from "../../store/weatherSlice";
import WeatherCard from "../components/WeatherCard";
import "./SearchPage.css";
const SearchPage = (props) => {
  const dispatch = useDispatch();
  const [input, setInput] = useState({
    search: "",
    valid: false,
  });
  const [currentLocation, setCurrentLocation] = useState("s");
  const handleInput = async (inputObject) => {
    setInput(inputObject);
    const result = await autoComplete(inputObject.search);
    if (result === "error") {
    } else {
      const arrayResult = getAutoCompleteArray(result);
      dispatch(weatherActions.setAutoComplete(arrayResult));
    }
  };
  const handleSubmit = async (fullDetails) => {
    console.log(fullDetails, "sub");
    const response = await currentLocationApi(fullDetails);
    console.log(response);
    let tempAndDetailsObject = {
      ...fullDetails,
      icon: response[0].WeatherIcon,
      temp: response[0].Temperature.Metric.Value,
      text: response[0].WeatherText,
    };

    setCurrentLocation(tempAndDetailsObject);
    dispatch(weatherActions.setCurrentLocationWeather(tempAndDetailsObject));
  };

  return (
    <div>
      <div className="searchInput">
        <Input
          inputName="search"
          helperText="choose a city."
          placeHolder="Enter City"
          handleInput={handleInput}
          handleSubmit={handleSubmit}
          currentLocation={currentLocation}
        />
      </div>
      <WeatherCard currentLocation={currentLocation} />
    </div>
  );
};

export default SearchPage;
