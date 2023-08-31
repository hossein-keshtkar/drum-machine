export const keydownHandler = (e, callback) => {
  console.log(e.code);
  const regEx = /^Key/;

  if (regEx.test(e.code)) {
    const replacement = e.code.replace(regEx, "");
    callback(replacement);
  } else if (e.code === "Comma") {
    callback(",");
  } else if (e.code === "Period") {
    callback(".");
  }
};
