import React, { useEffect, useState } from "react";
import Headline from "../../components/HeadeLine";
import { fiveDaysApi } from "../../helpers/apiCalls";
import { fiveDaysObject } from "../../helpers/helperFunc";
import WeatherCard from "./WeatherCard";
import "./WeatherCardList.css";

const WeatherCardList = (props) => {
  const { currentLocation, cardWidth } = props;
  const [weatherObject, setWeatherObject] = useState({
    text: "",
    weatherArray: [],
  });
  const getFiveDaysForcast = async () => {
    const data = await fiveDaysApi(currentLocation);

    let weatherObjectFiveDays = fiveDaysObject(data);
    setWeatherObject(weatherObjectFiveDays);
  };
  console.log("555");
  useEffect(() => {
    getFiveDaysForcast();
  }, []);

  return (
    <div>
      <Headline lable={weatherObject.weekText} />
      <div className="list">
        {weatherObject.weatherArray.map((day, index) => {
          return (
            <div className="weatherList">
              {" "}
              <WeatherCard currentLocation={day} index={index} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WeatherCardList;
