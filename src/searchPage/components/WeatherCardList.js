import React, { useEffect } from "react";
import { fiveDaysApi } from "../../helpers/apiCalls";

const WeatherCardList = (props) => {
  const { currentLocation, cardWidth } = props;
  const getFiveDaysForcast = async () => {
    const data = await fiveDaysApi(currentLocation);
    console.log(data, "555");
  };
  useEffect(() => {
    getFiveDaysForcast();
  }, []);

  return <div></div>;
};

export default WeatherCardList;
