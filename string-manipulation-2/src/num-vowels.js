/* exported numVowels */

function numVowels(string) {
  const vowels = 'aeiou';
  let counter = 0;
  for (let i = 0; i < string.length; i++) {
    if (vowels.includes(string[i].toLowerCase())) {
      counter++;
    }
  }
  return counter;
}
