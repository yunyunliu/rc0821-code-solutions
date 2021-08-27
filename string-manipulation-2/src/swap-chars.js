/* exported swapChars */

function swapChars(firstIndex, secondIndex, string) {
  const firstChar = string[firstIndex];
  const secondChar = string[secondIndex];
  const strStart = string.slice(0, firstIndex);
  const strMid = string.slice(firstIndex + 1, secondIndex);
  const strEnd = string.slice(secondIndex + 1);

  return strStart + secondChar + strMid + firstChar + strEnd;
}
