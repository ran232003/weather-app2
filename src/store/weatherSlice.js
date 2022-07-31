import { createSlice } from "@reduxjs/toolkit";

const weatherSlice = createSlice({
  name: "weather",
  initialState: { autoComplete: [], currentLocationWeather: {} },
  reducers: {
    setAutoComplete(state, action) {
      state.autoComplete = action.payload;
    },
    setCurrentLocationWeather(state, action) {
      state.currentLocationWeather = action.payload;
    },
  },
});

export default weatherSlice;
export const weatherActions = weatherSlice.actions;
