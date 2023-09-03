import { createSlice } from "@reduxjs/toolkit";
import { DARK, LIGHT, MODE } from "../constants/keywords";

const modeSlice = createSlice({
  name: MODE,

  initialState: {
    value: LIGHT,
  },

  reducers: {
    lightMode: (state) => {
      state.value = LIGHT;
    },

    darkMode: (state) => {
      state.value = DARK;
    },
  },
});

export const { lightMode, darkMode } = modeSlice.actions;

export default modeSlice.reducer;
