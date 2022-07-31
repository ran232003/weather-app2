import { APIKEY } from "./helperFunc";
export const autoComplete = async (search) => {
  const response = await fetch(
    `http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${APIKEY}&q=${search}&language=en-us`
  );
  console.log(response);
  if (response.status == 200) {
    const data = await response.json();
    // console.log(data);
    return data;
  } else {
  }
};
export const currentLocationApi = async (location) => {
  console.log(location, "api");
  let key = location.key;
  const response = await fetch(
    `http://dataservice.accuweather.com/currentconditions/v1/${key}?apikey=${APIKEY}&language=en-us&details=false`
  );
  console.log(response);
  if (response.status == 200) {
    const data = await response.json();
    // console.log(data);
    return data;
  } else {
  }
};
