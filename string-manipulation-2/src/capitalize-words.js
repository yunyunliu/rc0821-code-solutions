/* exported capitalizeWords */

/*
1. use string.split to get an array of words
2. loop through array and capitalize first character of each element
3. use array method join to make a string
*/

function capitalizeWords(string) {
  const words = string.split(' ');
  const capitalizedWords = [];
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    const firstChar = word[0].toUpperCase();
    const remaining = word.slice(1).toLowerCase();
    capitalizedWords.push(firstChar + remaining);
  }
  return capitalizedWords.join(' ');
}
