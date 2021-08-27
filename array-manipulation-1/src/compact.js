/* exported compact */
function compact(array) {
  const compactedArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i]) {
      compactedArray.push(array[i]);
    }
  }
  return compactedArray;
}
