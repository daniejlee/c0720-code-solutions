/* eslint-disable no-unused-vars */
const invert = source => {
  const newObj = {};
  for (const key in source) {
    newObj[source[key]] = key;
  }
  return newObj;
};
