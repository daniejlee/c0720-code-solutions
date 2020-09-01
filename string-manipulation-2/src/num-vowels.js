/* eslint-disable no-unused-vars */
function numVowels(string) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let vowelCount = 0;
  for (let i = 0; i < string.length; i++) {
    for (let j = 0; j < vowels.length; j++) {
      if ((string[i].toLowerCase()) === vowels[j]) vowelCount++;
    }
  }
  return vowelCount;
}
