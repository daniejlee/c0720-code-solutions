/* eslint-disable no-unused-vars */
function tail(array) {
  const newArr = [];
  for (let i = 1; i < array.length; i++) {
    newArr.push(array[i]);
  }
  return newArr;
}
