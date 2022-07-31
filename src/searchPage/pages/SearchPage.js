import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import Input from "../../components/Input";
import {
  autoComplete,
  currentLocationApi,
  myLocationApi,
} from "../../helpers/apiCalls";
import { getAutoCompleteArray } from "../../helpers/helperFunc";
import { weatherActions } from "../../store/weatherSlice";
import WeatherCard from "../components/WeatherCard";
import WeatherCardList from "../components/WeatherCardList";
import "./SearchPage.css";
const SearchPage = (props) => {
  const dispatch = useDispatch();
  const [input, setInput] = useState({
    search: "",
    valid: false,
  });
  const [location, setLocation] = useState(null);
  const [currentLocation, setCurrentLocation] = useState(null);
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
    const response = await currentLocationApi(fullDetails);
    let tempAndDetailsObject = {
      ...fullDetails,
      icon: response[0].WeatherIcon,
      temp: response[0].Temperature.Metric.Value,
      text: response[0].WeatherText,
    };

    setCurrentLocation(tempAndDetailsObject);
    dispatch(weatherActions.setCurrentLocationWeather(tempAndDetailsObject));
  };
  const getLocation = () => {
    if (currentLocation == null) {
      navigator.geolocation.getCurrentPosition(function (position) {
        setLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      });
    }
  };
  const setMyLocation = async () => {
    if (location) {
      const data = await myLocationApi(location);
      let obj = {
        fullName: `${data.EnglishName} (${data.Country.LocalizedName})`,
        key: data.Key,
        country: data.Country.LocalizedName,
        city: data.EnglishName,
      };
      dispatch(weatherActions.setAutoComplete(obj));
      handleSubmit(obj);
    }
  };
  useEffect(() => {
    getLocation();
  }, []);
  useEffect(() => {
    setMyLocation();
  }, [location]);

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
      {currentLocation === null ? null : (
        <WeatherCard currentLocation={currentLocation} />
      )}
      <div className="weatherList">
        <WeatherCardList cardWidth="7rem" currentLocation={currentLocation} />
      </div>
    </div>
  );
};

export default SearchPage;
