/* eslint-disable no-unused-vars */
function lastChars(length, string) {
  let newStr = '';
  for (let i = string.length - length; i < string.length; i++) {
    if (string[i]) { newStr += string[i]; }
  }
  return newStr;
}
