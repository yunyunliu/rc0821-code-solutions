/* exported takeNextSmallest */
// (51, 63, 35, 41);

function takeNextSmallest(queue) {
  let first = queue.dequeue(); // 51
  let second = queue.peek(); // 63
  if (first === undefined || second === undefined) {
    return first;
  }
  while (first > second) { //
    queue.enqueue(first); //  64 -19 94 13
    first = queue.dequeue();
    second = queue.peek();
  }
  return first;
}
