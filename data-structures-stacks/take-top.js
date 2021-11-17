/* exported takeTop */

function takeTop(stack) {
  const topval = stack.peek();
  stack.pop();
  return topval;
}
