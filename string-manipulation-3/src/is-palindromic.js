/* exported isPalindromic */
/*
1. split string into array of characters
2. reverse array
3. iterate through string and check each letter against array element at that index for equality
  if not equal: return false
  if true; keep checking
4. return true
*/
function isPalindromic(string) {
  // remove spaces from string
  const noSpaces = string.replaceAll(' ', '');
  const arr = noSpaces.split('');
  const reversed = arr.reverse();
  // console.log('reversed:', reversed, 'string:', string);
  for (let i = 0; i < string.length; i++) {
    if (noSpaces[i] !== reversed[i]) {
      return false;
    }
  }
  return true;
}
