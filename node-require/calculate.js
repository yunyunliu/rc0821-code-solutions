const add = require('./add');
const subtract = require('./subtract');
const multiply = require('./multiply');
const divide = require('./divide');

function calculate(operator, x, y) {
  let result;
  switch (operator) {
    case 'plus':
      result = add(x, y);
      break;
    case 'minus':
      result = subtract(x, y);
      break;
    case 'times':
      result = multiply(x, y);
      break;
    case 'over':
      result = divide(x, y);
  }
  console.log(`result: ${result}`);
}

const { 2: num1, 3: operator, 4: num2 } = process.argv;

calculate(operator, parseFloat(num1), parseFloat(num2));
