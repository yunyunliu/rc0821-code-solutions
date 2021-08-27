/* exported reverseWord */
function reverseWord(word) {
  let reversed = '';
  for (let i = 0; i < word.length; i++) {
    reversed = word[i] + reversed;
  }
  return reversed;
}
