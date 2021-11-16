/* exported get2ndFromTop */

function get2ndFromTop(stack) {
  if (typeof stack.peek() !== 'undefined') {
    const top = stack.pop();
    const second = stack.peek();
    if (typeof stack.peek() !== 'undefined') {
      stack.push(top);
      return second;
    } else {
      stack.push(top);
    }
  }
}
