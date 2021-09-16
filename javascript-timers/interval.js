const interval = setInterval(() => {
  const $heading = document.querySelector('h1');
  let count = parseInt($heading.textContent);
  if ((count - 1) === 0) {
    $heading.textContent = '~Earth Beeeelooowww Us~';
    clearInterval(interval);
  } else {
    count--;
    $heading.textContent = count;
  }
}, 1000);
