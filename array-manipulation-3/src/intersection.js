/* exported intersection */
function intersection(first, second) {
  const intersecting = [];

  // adding all values that first shares with second
  for (let i = 0; i < first.length; i++) {
    const val = first[i];
    if (second.includes(val)) {
      intersecting.push(val);
    }
  }
  return intersecting;
}
