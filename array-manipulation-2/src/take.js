/* exported take */
// 1. Define the function take.
//  this function has two parameters: 1. an array 2. a positive integer number
//  the function outputs an array that contains elements from the input array. The
//  number of elements is determined by the count parameter
// 2. create and empty array and assign the variable taken
// 3. loop through the input array to access and take elements
// loop should run count - 1 iterations
//  each iteration of the loop will
//        1. access the element at array[i]
//        2. push that value into the array taken
// return the array taken; it's length should equal count

function take(array, count) {
  const taken = [];
  if (array.length >= count) {
    for (let i = 0; i < count; i++) {
      taken.push(array[i]);
    }
  }
  return taken;
}
