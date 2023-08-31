import { DISPLAY, VOLUME, MODE } from "../constants/keywords";

export const reducer = (state, action) => {
  switch (action.type) {
    case VOLUME:
      return { ...state, volume: action.payload };

    case DISPLAY:
      return { ...state, display: action.payload };

    case MODE:
      return { ...state, mode: action.payload };

    default:
      return state;
  }
};
