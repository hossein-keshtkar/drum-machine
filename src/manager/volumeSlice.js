import { createSlice } from "@reduxjs/toolkit";
import { VOLUME } from "../constants/keywords";

const volumeSlice = createSlice({
  name: VOLUME,

  initialState: {
    value: 50,
  },

  reducers: {
    updateVolume: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { updateVolume } = volumeSlice.actions;

export default volumeSlice.reducer;
