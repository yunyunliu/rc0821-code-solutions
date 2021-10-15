const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const account = [
  { type: 'deposit', amount: 150 },
  { type: 'deposit', amount: 20 },
  { type: 'withdrawal', amount: 5 },
  { type: 'deposit', amount: 100 },
  { type: 'withdrawal', amount: 25 },
  { type: 'withdrawal', amount: 60 }
];

const traits = [
  { color: 'yellow' },
  { type: 'electric' },
  { name: 'pikachu' },
  { level: 15 },
  { trainer: 'ash' }
];

const sum = numbers.reduce((acc, current) => acc + current);
console.log('sum:', sum);
const product = numbers.reduce((acc, current) => acc * current);
console.log('product:', product);

const balance = account.reduce((acc, current) => {
  let amount;
  if (current.type === 'withdrawal') {
    amount = current.amount * -1;
  } else {
    amount = current.amount;
  }
  return acc + amount;
}, 0);

console.log('balance:', balance);

const composite = traits.reduce((acc, current) => {
  const [key] = Object.keys(current);
  const [value] = Object.values(current);
  acc[key] = value;
  return acc;
}, {});
console.log('composite:', composite);
