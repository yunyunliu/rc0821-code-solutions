/* exported ransomCase */
/*
define function called ransomCase which takes 1 string parameter called 'string';
function ransomCase returns it's input with every other character uppercased, while the others are lowercase
1. declare variable called result and assign it the value ''
2. loop through each character of 'string'
    1. at each index check if index is divisible by 2 (aka even)
      if yes: use toLowerCase method on that character
      if no: use toUpperCase method
    2. concatenate character to the end of 'result'
3. return 'result'
*/

function ransomCase(string) {
  let result = '';
  for (let i = 0; i < string.length; i++) {
    let char;
    if (i % 2 === 0) {
      char = string[i].toLowerCase();
    } else {
      char = string[i].toUpperCase();
    }
    result += char;
  }
  return result;
}
