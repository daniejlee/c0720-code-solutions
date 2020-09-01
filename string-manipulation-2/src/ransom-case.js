/* eslint-disable no-unused-vars */
function ransomCase(string) {
  let newWord = '';
  for (let i = 0; i < string.length; i++) {
    if (i % 2) {
      newWord += string[i].toUpperCase();
    } else {
      newWord += string[i].toLowerCase();
    }
  }
  return newWord;
}
