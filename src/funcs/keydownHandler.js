export const keydownHandler = (e, callback) => {
  const regEx = /^Key/;

  callback(e.code.replace(regEx, ""));
};
