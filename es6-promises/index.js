const takeAChance = require('./take-a-chance');

const aPromise = takeAChance('Yunyun');

aPromise.then(val => console.log(val))
  .catch(err => console.log(err.message));
