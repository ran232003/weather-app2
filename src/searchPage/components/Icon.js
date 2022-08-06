import React, { useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { weatherActions } from "../../store/weatherSlice";
import "./Icon.css";
const Icon = (props) => {
  const { currentLocation } = props;
  const [backgroundColor, setBackgroundColor] = useState(false);
  const dispatch = useDispatch();
  const addToFavirite = () => {
    console.log(currentLocation);
    dispatch(weatherActions.addFavorite(currentLocation));
  };
  let color = backgroundColor === false ? "black" : "red";
  return (
    <div>
      <AiOutlineHeart
        style={{ color: color }}
        onClick={addToFavirite}
        className="myIcon"
      />
    </div>
  );
};

export default Icon;
