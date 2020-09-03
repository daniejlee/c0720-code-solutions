/* eslint-disable no-console */
const add = require('./add');
const subtract = require('./subtract');
const multiply = require('./multiply');
const divide = require('./divide');

const operation = process.argv[3];
const num1 = parseInt(process.argv[2]);
const num2 = parseInt(process.argv[4]);
switch (operation) {
  case 'plus':
    console.log('result: ' + add(num1, num2));
    break;
  case 'minus':
    console.log('result: ' + subtract(num1, num2));
    break;
  case 'times':
    console.log('result: ' + multiply(num1, num2));
    break;
  case 'over':
    console.log('result: ' + divide(num1, num2));
    break;
}

// if (process.argv[])
