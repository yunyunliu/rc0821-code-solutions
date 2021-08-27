/* exported truncate */
/*
define function called truncate with 2 parameters: 1. string (type string) 2. length(type number)
function returns string shortened to length with ellipses cooncatenated at end
1. use slice string method on string, starting at index 0, ending at index length
assign this value to variable result
2. use concatenate operator to append ellipses to result
3. return result
*/

function truncate(length, string) {
  const result = string.slice(0, length); // 2nd parameter of slice method is the index to slice before
  return result + '...';
}
