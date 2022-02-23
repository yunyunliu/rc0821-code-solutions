/* exported reverseWords */

function reverse(str) {
  let reversed = '';
  for (let i = str.length - 1; i >= 0; i--) {
    const char = str[i];
    reversed += char;
  }

  return reversed;
}

function reverseWords(string) {
  const words = string.split(' ');
  const result = [];
  for (let i = 0; i < words.length; i++) {
    result.push(reverse(words[i]));
  }
  return result.join(' ');
}
