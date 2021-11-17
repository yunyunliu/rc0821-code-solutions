/* global LinkedList */ // eslint-disable-line no-unused-vars
/* exported prepend */

function prepend(list, value) {
  const prepended = new LinkedList(value);
  prepended.next = list;
  return prepended;
}
