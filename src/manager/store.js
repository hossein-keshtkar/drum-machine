import { configureStore } from "@reduxjs/toolkit";
import displaySliceReducer from "./displaySlice";
import modeSliceReducer from "./modeSlice";
import volumeSliceReducer from "./volumeSlice";

export const store = configureStore({
  reducer: {
    mode: modeSliceReducer,
    display: displaySliceReducer,
    volume: volumeSliceReducer,
  },
});
