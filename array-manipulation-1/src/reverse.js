/* exported reverse */
function reverse(array) {
  const reversed = [];
  for (let i = 0; i < array.length; i++) {
    reversed.unshift(array[i]);
  }
  return reversed;
}
