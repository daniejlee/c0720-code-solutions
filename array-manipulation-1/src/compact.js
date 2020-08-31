/* eslint-disable no-unused-vars */
function compact(array) {
  const newArr = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i]) {
      newArr.push(array[i]);
    }
  }
  return newArr;
}
