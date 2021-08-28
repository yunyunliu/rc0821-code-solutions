/* exported unique */
function unique(array) {
  const uniqueValues = [];
  for (let i = 0; i < array.length; i++) {
    const val = array[i];
    if (!uniqueValues.includes(val)) {
      uniqueValues.push(val);
    }
  }
  return uniqueValues;
}
