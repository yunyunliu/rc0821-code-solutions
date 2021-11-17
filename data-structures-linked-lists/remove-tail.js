/* exported removeTail */

function removeTail(list) {
  if (list.next) {
    let previous = list;
    let current = list.next;
    let next = list.next.next;
    while (next) {
      previous = current;
      current = next;
      next = next.next;
    }
    previous.next = null;
  }
}
