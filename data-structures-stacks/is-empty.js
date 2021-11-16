/* exported isEmpty */

function isEmpty(stack) {
  return typeof stack.peek() === 'undefined';
}
