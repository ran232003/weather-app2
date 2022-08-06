import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import WeatherCard from "../../searchPage/components/WeatherCard";
import { weatherActions } from "../../store/weatherSlice";
import "./FavoritePage.css";
const FavoritePage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const favorites = useSelector((state) => {
    return state.weather.favoritesLocation;
  });
  const moveToSearch = (item) => {
    dispatch(weatherActions.setCurrentLocationWeather(item));
    navigate("/search");
  };
  console.log(favorites);
  return (
    <div className="weatherCardList">
      {favorites.map((item) => {
        return (
          <div
            className="tests"
            onClick={() => {
              moveToSearch(item);
            }}
          >
            <WeatherCard currentLocation={item} cursor="pointer" />
          </div>
        );
      })}
    </div>
  );
};

export default FavoritePage;
