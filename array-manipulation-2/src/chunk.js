/* eslint-disable no-unused-vars */
const chunk = (array, size) => {
  const newArr = [];
  let subArr = [];
  let counter = 0;
  for (let i = 0; i < array.length; i++) {
    subArr.push(array[i]);
    counter++;
    if (counter === size) {
      newArr.push(subArr);
      subArr = [];
      counter = 0;
    }
  }
  if (subArr.length > 0) newArr.push(subArr);
  return newArr;
};
