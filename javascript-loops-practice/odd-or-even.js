/* exported oddOrEven */
function oddOrEven(numbers) {
  const results = [];
  for (let i = 0; i < numbers.length; i++) {
    const val = numbers[i];
    if (val % 2 === 0) {
      results.push('even');
    } else {
      results.push('odd');
    }
  }
  return results;
}
