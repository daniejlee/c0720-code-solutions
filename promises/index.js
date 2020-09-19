/* eslint-disable no-unused-vars, no-console */
const takeAChance = require('./take-a-chance');

const gamble = takeAChance('daniel');
gamble.then(value => {
  console.log(value);
});
gamble.catch(error => {
  console.error(error.message);
});
