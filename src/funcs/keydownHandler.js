import { COMMA, PERIOD } from "../constants/keywords";

export const keydownHandler = (e, callback) => {
  const regEx = /^Key/;

  if (regEx.test(e.code)) {
    const replacement = e.code.replace(regEx, "");
    callback(replacement);
  } else if (e.code === COMMA) {
    callback(",");
  } else if (e.code === PERIOD) {
    callback(".");
  }
};
