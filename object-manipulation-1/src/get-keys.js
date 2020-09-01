/* eslint-disable no-unused-vars */
function getKeys(object) {
  const keysArr = [];
  for (const key in object) {
    keysArr.push(key);
  }
  return keysArr;
}
