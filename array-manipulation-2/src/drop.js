/* exported drop */

/*
1. define function drop with 2 parameter: 1. an array 2. a positive integer number (count)
2. create empty array and assign it to variable dropped
3. check if the parameter count is greater than the length of array
    if true: return dropped
    if false:
  4. loop through the entire parameter array
      before each iteration check if the current index + 1 is equal to count
        if true: break from loop
        if false: push array[i] to dropped
  5. return dropped
*/

function drop(array, count) {
  const dropped = [];
  if (array.length > count) {
    for (let i = 0; i < array.length; i++) {
      if (i >= count) {
        dropped.push(array[i]);
      }
    }
  }
  return dropped;
}
