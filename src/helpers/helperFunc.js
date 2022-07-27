export const APIKEY = "6jAYLwBpvKKB9w73VnO2DEAN2sPyGGpL";
export const getAutoCompleteArray = (object) => {
  let detailArray = [];
  console.log(object);
  object.forEach((detailCity) => {
    console.log(detailCity);
    let detail = "";
    detail = `${detailCity.LocalizedName} (${detailCity.Country.LocalizedName})`;
    detailArray.push(detail);
  });

  return detailArray;
};
