/* exported maxValue */

function maxValue(stack) {
  if (typeof stack.peek() === 'undefined') {
    return -Infinity;
  }
  let max = stack.peek();
  while (typeof stack.peek() !== 'undefined') {
    const current = stack.pop();
    if (current > max) {
      max = current;
    }
  }
  return max;
}
