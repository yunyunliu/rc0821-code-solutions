/* exported omit */
function omit(source, keys) {
  const resultObj = {};
  for (const prop in source) {
    if (!keys.includes(prop)) {
      resultObj[prop] = source[prop];
    }
  }
  return resultObj;
}
