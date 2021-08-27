/* exported dropRight */

function dropRight(array, count) {
  return array.slice(0, -1 * count); // slice ends count from end of array, so like dropping
}
