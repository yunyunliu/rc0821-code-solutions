function map(array, transform) {
  const mapped = [];
  array.forEach(el => {
    const transformed = transform(el);
    mapped.push(transformed);
  });
  return mapped;
}

const newDoubled = map(numbers, n => 2 * n);

console.log('map(numbers, n => 2 * n):', newDoubled);

const newPrices = map(numbers, num => `$${num}.00`);

console.log('prices using map():', newPrices);
