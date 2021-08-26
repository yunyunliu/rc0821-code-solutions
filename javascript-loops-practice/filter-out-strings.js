/* exported filterOutStrings */
function filterOutStrings(values) {
  const notStrings = [];

  for (let i = 0; i < values.length; i++) {
    const val = values[i];
    if (typeof val === 'string') {
      continue;
    }
    notStrings.push(val);
  }
  return notStrings;
}
