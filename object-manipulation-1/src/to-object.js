/* exported toObject */
function toObject(keyPairValue) {
  const obj = {};
  const key = keyPairValue[0];
  const val = keyPairValue[1];
  obj[key] = val;
  return obj;
}
