/* exported pick */
/*
inputs: 1. source (js object) 2. keys (array of strings)
out:
*/

function pick(source, keys) {
  const resultObj = {};
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    if (source[key] !== undefined) {
      resultObj[key] = source[key];
    }
  }
  return resultObj;
}
