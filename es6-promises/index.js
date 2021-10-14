const takeAChance = require('./take-a-chance');

const aPromise = takeAChance('Yunyun');

aPromise.then(val => console.log(val), err => console.log(err.message));
