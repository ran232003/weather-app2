import { createSlice } from "@reduxjs/toolkit";

const weatherSlice = createSlice({
  name: "weather",
  initialState: {
    autoComplete: [],
    currentLocationWeather: null,
    favoritesLocation: [],
  },
  reducers: {
    setAutoComplete(state, action) {
      if (Array.isArray(action.payload) === true) {
        state.autoComplete = action.payload;
      } else {
        state.autoComplete.push(action.payload);
      }
    },
    setCurrentLocationWeather(state, action) {
      state.currentLocationWeather = action.payload;
    },
    removeFave(state, action) {},
    addFavorite(state, action) {
      let obj = state.favoritesLocation.find((item) => {
        console.log(item.key, action.payload.key);
        return item.key === action.payload.key;
      });
      if (typeof obj === "undefined") {
        state.favoritesLocation.push(action.payload);
        state.currentLocationWeather.fave = true;
      } else {
        console.log(obj, "obj");
      }
    },
  },
});

export default weatherSlice;
export const weatherActions = weatherSlice.actions;
