/* eslint-disable no-unused-vars */
const take = (array, count) => {
  const newArr = [];
  if (array.length >= count) {
    for (let i = 0; i < count; i++) {
      newArr.push(array[i]);
    }
  }
  return newArr;
};
