/* exported isPalindromic */
// multiple pointer pattern

function isPalindromic(string) {
  const str = string.replaceAll(' ', '');
  let first = 0; let last = str.length - 1;

  while (first < last) {
    if (str[first] !== str[last]) {
      return false;
    } else {
      first++; last--;
    }
  }
  return true;
}
