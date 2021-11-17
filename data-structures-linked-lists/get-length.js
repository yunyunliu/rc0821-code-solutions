/* exported getLength */

function getLength(list) {
  let count = 0;
  let current = list;
  while (current) {
    count++;
    current = current.next;
  }
  return count;
}
