/* exported flatten */
/* create empty array to hold results
 loop through  outer array
  at each index check if item is array
    if yes: loop through inner array and push each item into results
    if no: push item into results
  return results
*/

function flatten(array) {
  const flattened = [];
  for (let i = 0; i < array.length; i++) {
    const current = array[i];
    if (!Array.isArray(current)) {
      flattened.push(current);
    } else {
      for (let j = 0; j < current.length; j++) {
        flattened.push(current[j]);
      }
    }
  }
  return flattened;
}
