/* eslint-disable no-unused-vars */
function zip(first, second) {
  const newArr = [];
  const smallerArrayLength = Math.min(first.length, second.length);
  for (let i = 0; i < smallerArrayLength; i++) {
    const subArr = [];
    subArr.push(first[i], second[i]);
    newArr.push(subArr);
  }
  return newArr;
}
