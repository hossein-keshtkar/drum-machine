import { configureStore } from "@reduxjs/toolkit";

import displayReducer from "./displaySlice";
import modeReducer from "./modeSlice";
import volumeReducer from "./volumeSlice";
import keyReducer from "./keySlice";

export const store = configureStore({
  reducer: {
    mode: modeReducer,
    display: displayReducer,
    volume: volumeReducer,
    key: keyReducer
  },
});
