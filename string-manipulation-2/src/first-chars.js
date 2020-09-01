/* eslint-disable no-unused-vars */
function firstChars(length, string) {
  let newStr = '';
  for (let i = 0; i < length; i++) {
    if (string[i]) { newStr += string[i]; }
  }
  return newStr;
}
