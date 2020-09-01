/* eslint-disable no-unused-vars */
function capitalizeWords(string) {
  const lowerCaseStr = string.toLowerCase();
  const wordArr = lowerCaseStr.split(' ');
  const newArr = wordArr.map(function (word) {
    let newWord = '';
    for (let i = 0; i < word.length; i++) {
      if (i === 0) newWord += word[i].toUpperCase();
      else newWord += word[i];
    }
    return newWord;
  });
  return newArr.join(' ');
}
