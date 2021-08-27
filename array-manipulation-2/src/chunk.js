/* exported chunk */
/*
 define function chunk with parameters 1. array and 2. size
 return an array of arrays with size number of elements - number of elements in output array
 determined  by array length modulo size and then and addition element for contain any remaining elements

*/

function chunk(array, size) {
  const chunks = [];
  if (array.length < size) {
    return chunks;
  }
  let remaining = array.slice();

  while (remaining.length > size) {
    const chunk = remaining.slice(0, size);
    remaining = remaining.slice(size);
    chunks.push(chunk);
  }
  chunks.push(remaining);
  return chunks;
}
