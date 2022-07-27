import { createSlice } from "@reduxjs/toolkit";

const weatherSlice = createSlice({
  name: "weather",
  initialState: { autoComplete: [] },
  reducers: {
    setAutoComplete(state, action) {
      state.autoComplete = action.payload;
    },
  },
});

export default weatherSlice;
export const weatherActions = weatherSlice.actions;
