import { createSlice } from "@reduxjs/toolkit";

import { DISPLAY } from "../constants/keywords";

const displaySlice = createSlice({
  name: DISPLAY,

  initialState: {
    value: "Display",
  },

  reducers: {
    displayInstrument: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { displayInstrument } = displaySlice.actions;

export default displaySlice.reducer;
