/* eslint-disable no-unused-vars */
const defaults = (target, source) => {
  for (const key in source) {
    if (!Object.prototype.hasOwnProperty.call(target, key)) {
      target[key] = source[key];
    }
  }
};
