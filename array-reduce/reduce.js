
function reduce(array, reducer, initialValue) {
  let acc;
  // if value given for initalValue
  if (typeof initialValue !== 'undefined') {
    acc = initialValue;
    for (let i = 0; i < array.length; i++) {
      const current = array[i];
      acc = reducer(acc, current);
    }
    // no value passed in for initialValue
  } else {
    // first element of array used as initialValue
    acc = array[0];
    for (let i = 1; i < array.length; i++) {
      const current = array[i];
      acc = reducer(acc, current);
    }
  }
  return acc;
}

const reduceFunction = reduce(numbers, (acc, current) => acc + current, 0);
console.log('sum with reduce function:', reduceFunction);
const functionProduct = reduce(numbers, (acc, current) => acc * current, 1);
console.log('product with reduce function:', functionProduct);

const traitsReducer = (acc, current) => {
  Object.assign(acc, current);
  return acc;
};
const reduceTraits = reduce(traits, traitsReducer, {});
console.log('traits with reduce function:', reduceTraits);
