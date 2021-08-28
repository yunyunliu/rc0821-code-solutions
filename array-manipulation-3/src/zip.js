/* exported zip */

function zip(first, second) {
  const zipped = [];
  let shorter;
  first.length < second.length
    ? shorter = first
    : shorter = second;

  for (let i = 0; i < shorter.length; i++) {
    const tuple = [first[i], second[i]];
    zipped.push(tuple);
  }
  return zipped;
}
