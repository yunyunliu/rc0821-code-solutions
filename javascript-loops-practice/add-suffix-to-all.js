/* exported addSuffixToAll */
function addSuffixToAll(words, suffix) {
  const withSuffixes = [];

  for (let i = 0; i < words.length; i++) {
    const newWord = words[i] + suffix;
    withSuffixes.push(newWord);
  }
  return withSuffixes;
}
