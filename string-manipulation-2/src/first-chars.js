/* exported firstChars */

function firstChars(length, string) {
  let result = '';

  if (length >= string.length) {
    return string;
  }
  for (let i = 0; i < length; i++) {
    result += string[i];
  }

  return result;
}
