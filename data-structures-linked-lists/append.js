/* global LinkedList */ // eslint-disable-line no-unused-vars
/* exported append */

function append(list, value) {
  const val = new LinkedList(value);
  val.next = null;
  let current = list;
  while (current.next) {
    current = current.next;
  }
  current.next = val;
}
