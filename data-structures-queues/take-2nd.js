/* exported take2nd */

function take2nd(queue) {
  const first = queue.dequeue();
  const second = queue.dequeue();
  if (first === undefined || second === undefined) {
    return first;
  }
  queue.enqueue(first);
  return second;
}
