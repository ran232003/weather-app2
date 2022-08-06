export const APIKEY = "6jAYLwBpvKKB9w73VnO2DEAN2sPyGGpL";
export const getAutoCompleteArray = (object) => {
  let detailArray = [];
  object.forEach((detailCity) => {
    let detail = "";

    detail = `${detailCity.LocalizedName} (${detailCity.Country.LocalizedName})`;
    let obj = {
      fullName: detail,
      key: detailCity.Key,
      country: detailCity.Country.LocalizedName,
      city: detailCity.LocalizedName,
    };
    detailArray.push(obj);
  });

  return detailArray;
};
export const fiveDaysObject = (data) => {
  let weatherArray = [];
  weatherArray = data.DailyForecasts.map((day) => {
    let temp =
      day.Temperature.Minimum.Value + " - " + day.Temperature.Maximum.Value;
    let date = new Date(day.Date);
    date = days[date.getDay()];
    let obj = {
      icon: day.Day.Icon,
      text: day.Day.IconPhrase,
      date: date,
      temp: temp,
    };
    return obj;
  });
  let finalObject = {
    weatherArray: weatherArray,
    weekText: data.Headline.Text,
  };

  return finalObject;
};

export const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
