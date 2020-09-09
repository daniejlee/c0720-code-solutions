/* eslint-disable no-unused-vars */
const omit = (source, keys) => {
  const newObj = Object.assign({}, source);

  for (let i = 0; i < keys.length; i++) {
    if (source[keys[i]]) { delete newObj[keys[i]]; }
  }
  return newObj;
};
