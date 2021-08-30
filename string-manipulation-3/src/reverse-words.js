/* exported reverseWords */
function reverseString(string) {
  let reversedStr = '';
  for (let i = 0; i < string.length; i++) {
    const char = string[i];
    reversedStr = char + reversedStr;
  }
  return reversedStr;
}

function reverseWords(string) {
  const words = string.split(' ');
  const reversedWords = [];
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    reversedWords.push(reverseString(word));
  }
  return reversedWords.join(' ');
}
