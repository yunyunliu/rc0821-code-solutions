/* exported invert */

function invert(source) {
  const invertedObj = {};
  for (const prop in source) {
    const val = source[prop];
    invertedObj[val] = prop;
  }
  return invertedObj;
}
