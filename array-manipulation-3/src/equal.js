/* eslint-disable no-unused-vars */
const equal = (first, second) => {
  let flag = true;
  for (let i = 0; i < first.length; i++) {
    if (first[i] !== second[i]) flag = false;
  }
  return flag;
};
