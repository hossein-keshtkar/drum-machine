import { configureStore } from "@reduxjs/toolkit";

import displayReducer from "./displaySlice";
import modeReducer from "./modeSlice";
import volumeReducer from "./volumeSlice";

export const store = configureStore({
  reducer: {
    mode: modeReducer,
    display: displayReducer,
    volume: volumeReducer,
  },
});
