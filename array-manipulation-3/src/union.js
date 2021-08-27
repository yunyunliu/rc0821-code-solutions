/* exported union */
function union(first, second) {
  const unionArr = [];

  // add all unique values in frst

  for (let i = 0; i < first.length; i++) {
    const val = first[i];
    if (!unionArr.includes(val)) {
      unionArr.push(val);
    }
  }

  // add all unique values from second, check first if that value was added from first

  for (let i = 0; i < second.length; i++) {
    const val = second[i];
    if (!unionArr.includes(val)) {
      unionArr.push(val);
    }
  }
  return unionArr;
}
