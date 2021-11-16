/* exported takeNextSmallest */

function takeNextSmallest(queue) {
  let first = queue.dequeue();
  let second = queue.peek();
  if (first === undefined || second === undefined) {
    return first;
  }
  while (first > second) {
    queue.enqueue(first);
    first = queue.dequeue();
    second = queue.peek();
  }
  return first;
}
