import { KEY_PRESS } from "../constants/keywords";

export const onKeyPress = (func) => {
  window.addEventListener(KEY_PRESS, func);

  return () => window.removeEventListener(KEY_PRESS, func);
};
