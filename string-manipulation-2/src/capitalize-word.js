/* exported capitalizeWord */

/*
define function capitalize which takes 1 parameter: 1. word (type string)
capitalize returns a input string with first letter capitalized and rest of the letters lowercase
with the exception of 'JavaScript'
1. use toLowerCase string method on input string to check if it equals 'javascript'
  if yes: return 'JavaScript'
  if no:
    1. use slice string method to slice divide word string into it's first character and remaining character
    2. use toUpperCase method on first character; use toLowerCase method of remaining characters
    3. concatenate first letter to remaining letters and return
 */

function capitalizeWord(word) {
  if (word.toLowerCase() === 'javascript') {
    return 'JavaScript';
  }
  const firstChar = word.slice(0, 1);
  const remaining = word.slice(1);
  return firstChar.toUpperCase() + remaining.toLowerCase();
}
