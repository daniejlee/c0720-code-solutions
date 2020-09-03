/* eslint-disable no-console */
let counter = 3;
const timer = setInterval(() => {
  if (counter === 0) {
    console.log('Blast off!');
    clearInterval(timer);
  } else {
    console.log(counter);
    counter--;
  }
}, 1000);
