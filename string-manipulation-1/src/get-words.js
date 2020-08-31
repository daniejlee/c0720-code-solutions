/* eslint-disable no-unused-vars */
function getWords(string) {
  const wordContainer = [];
  let word = '';
  if (string === '') {
    return wordContainer;
  }

  for (let i = 0; i < string.length; i++) {
    if (string[i] !== ' ') {
      word += string[i];
    } else if (string[i] === ' ') {
      wordContainer.push(word);
      word = '';
    }
  }

  wordContainer.push(word);
  return wordContainer;
}
