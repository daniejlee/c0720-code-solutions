/* eslint-disable no-console, no-unused-vars */

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

const sum = numbers.reduce((total, num) => total + num);
console.log(sum);

const product = numbers.reduce((total, num) => total * num);
console.log(product);

const balance = account.reduce((total, acc) => {
  if (acc.type === 'deposit') return total + acc.amount;
  else if (acc.type === 'withdrawal') return total - acc.amount;
}, 0);
console.log(balance);

const composite = traits.reduce((object, trait) => Object.assign(object, trait));
console.log(composite);
