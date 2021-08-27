/* exported includes */
/*
1. define function includes with two parameters: 1. an array 2. a search value
2. loop through entire array
  at each iteration: check if array[i] is equal to value
    if yes: return true
3. return false
*/

function includes(array, value) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return true;
    }
  }
  return false;
}
