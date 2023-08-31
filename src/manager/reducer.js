import { DISPLAY, VOLUME } from "../constants/keywords";

export const reducer = (state, action) => {
  switch (action.type) {
    case VOLUME:
      return { ...state, volume: action.payload };

    case DISPLAY:
      return { ...state, display: action.payload };

    default:
      return state;
  }
};
