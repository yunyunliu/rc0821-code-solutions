let count = 3;

const interval = setInterval(() => {
  console.log(count);
  count--;
  if (count === 0) {
    console.log('Blast off!');
    clearInterval(interval);
  }
}, 1000);
