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

export const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
