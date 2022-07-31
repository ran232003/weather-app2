import { createSlice } from "@reduxjs/toolkit";

const weatherSlice = createSlice({
  name: "weather",
  initialState: { autoComplete: [], currentLocationWeather: {} },
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
  },
});

export default weatherSlice;
export const weatherActions = weatherSlice.actions;
