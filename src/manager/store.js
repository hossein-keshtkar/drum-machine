import { configureStore } from "@reduxjs/toolkit";
import displaySliceReducer from "./displaySlice";
import modeSliceReducer from "./modeSlice";

export const store = configureStore({
  reducer: { mode: modeSliceReducer, display: displaySliceReducer },
});
