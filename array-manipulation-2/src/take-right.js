/* exported takeRight */
/*
  define function takeRight with 2 parameters: 1. an array 2. a positive integer, count
  check if count is less than or equal to length of array
    if yes:
    reverse array using loop; then use same logic as take functiom
    if no return empty array
*/

function takeRight(array, count) {
  return array.slice(array.length - count);
}
