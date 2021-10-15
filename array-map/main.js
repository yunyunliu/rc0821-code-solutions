const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const languages = [
  'Hypertext Markup Language',
  'Cascading Style Sheets',
  'ECMAScript',
  'PHP Hypertext Preprocessor',
  'Structured Query Language'
];

const doubled = numbers.map(num => 2 * num);
console.log('doubled:', doubled);

const numbersWithDecimals = [1.00, 2.05, 3, 4, 5, 6.08, 7, 8.00009, 9, 10.0000, 11, 12];
console.log('numbersWithDecimals:', numbersWithDecimals);
const prices = numbersWithDecimals.map(num => `$${num.toFixed(2)}`);
console.log('prices with decimals:', prices);
const upperCased = languages.map(lang => lang.toUpperCase());
console.log('upperCased:', upperCased);
const firstLetters = languages.map(lang => lang[0]);
console.log('firstLetters:', firstLetters);
