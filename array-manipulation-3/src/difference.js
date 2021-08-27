/* exported difference */

function difference(first, second) {
  const unique = [];

  for (let i = 0; i < first.length; i++) {
    const val = first[i];
    if (!second.includes(val)) {
      unique.push(val);
    }
  }

  for (let i = 0; i < second.length; i++) {
    const val = second[i];
    if (!first.includes(val)) {
      unique.push(val);
    }
  }
  return unique;
}
