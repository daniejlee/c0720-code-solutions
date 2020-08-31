/* eslint-disable no-unused-vars */
function capitalize(word) {
  let newWord = '';
  for (let i = 0; i < word.length; i++) {
    if (i === 0) {
      newWord += word[i].toUpperCase();
    } else {
      newWord += word[i].toLowerCase();
    }
  }
  return newWord;
}
