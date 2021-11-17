/* global LinkedList */ // eslint-disable-line no-unused-vars
/* exported insertNext */

function insertNext(list, value) {
  const second = new LinkedList(value);
  second.next = list.next;
  list.next = second;
}
