/* exported getTail */

function getTail(list) {
  let value = list.data;
  let current = list.next;
  while (current) {
    value = current.data;
    current = current.next;
  }
  return value;
}
