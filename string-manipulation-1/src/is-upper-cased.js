/* exported isUpperCased */
function isUpperCased(word) {
  const upperCases = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  for (let i = 0; i < word.length; i++) {
    if (!upperCases.includes(word[i])) {
      return false;
    }
  }
  return true;
}
