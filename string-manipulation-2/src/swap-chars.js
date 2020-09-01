/* eslint-disable no-unused-vars */
function swapChars(firstIndex, secondIndex, string) {
  const newStr = string.split('');
  newStr[firstIndex] = string[secondIndex];
  newStr[secondIndex] = string[firstIndex];

  return newStr.join('');
}
