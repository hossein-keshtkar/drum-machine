import { createSlice } from "@reduxjs/toolkit";

const keySlice = createSlice({
  name: "KEY",

  initialState: {
    value: null,
  },

  reducers: {
    updateKey: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { updateKey } = keySlice.actions;

export default keySlice.reducer;
