/* exported takeValueAtIndex */

function takeValueAtIndex(queue, index) {
  let count = index;
  while (count > 0 && queue.peek() !== undefined) {
    const front = queue.dequeue();
    queue.enqueue(front);
    count--;
  }
  return queue.dequeue();
}
