/* exported calculator */

const calculator = {
  add: function (x, y) {
    return x + y;
  },
  subtract: function (x, y) {
    return x - y;
  },
  multiply: function (x, y) {
    return x * y;
  },
  divide: function (x, y) {
    return x / y;
  },
  square: function (x) {
    return this.multiply(x, x);
  },
  sumAll: function (numbers) {
    return numbers.reduce((acc, current) => acc + current);
  },
  getAverage: function (numbers) {
    const sum = this.sumAll(numbers);
    const totalNumbers = numbers.length;
    return this.divide(sum, totalNumbers);
  }
};
