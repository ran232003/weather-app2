import { APIKEY } from "./helperFunc";
export const autoComplete = async (search) => {
  const response = await fetch(
    `http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${APIKEY}&q=${search}&language=en-us`
  );
  if (response.status == 200) {
    const data = await response.json();
    // console.log(data);
    return data;
  } else {
  }
};
export const currentLocationApi = async (location) => {
  let key = location.key;
  const response = await fetch(
    `http://dataservice.accuweather.com/currentconditions/v1/${key}?apikey=${APIKEY}&language=en-us&details=false`
  );
  if (response.status == 200) {
    const data = await response.json();
    // console.log(data);
    return data;
  } else {
  }
};

export const myLocationApi = async (location) => {
  const { lng, lat } = location;
  const response = await fetch(
    `http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=6jAYLwBpvKKB9w73VnO2DEAN2sPyGGpL&q=${lat},${lng}&language=en-us`
  );
  if (response.status == 200) {
    const data = await response.json();
    return data;
  } else {
  }
};
export const fiveDaysApi = async (location) => {
  const { key } = location;
  const response = await fetch(
    `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${key}?apikey=${APIKEY}`
  );
  console.log(response);
  if (response.status == 200) {
    const data = await response.json();
    console.log(data, "five");
    return data;
  } else {
  }
};
