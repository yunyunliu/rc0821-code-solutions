/* exported swapFront */

function swapFront(list) {
  const first = list;
  if (list.next) {
    const second = list.next;
    const third = list.next.next;
    first.next = third;
    second.next = first;
    return second;
  }
  return first;
}
