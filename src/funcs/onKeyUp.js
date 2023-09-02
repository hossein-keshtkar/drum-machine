import { KEY_UP } from "../constants/keywords";

export const onKeyUp = (func) => {
  window.addEventListener(KEY_UP, func);

  return () => window.removeEventListener(KEY_UP, func);
};
