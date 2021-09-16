const $dotsRow = document.getElementById('dot-container');

const $carouselImage = document.getElementById('carousel-image');

function createButtons() {
  images.forEach((image, i) => {
    const $button = document.createElement('button');
    $button.setAttribute('src', image.src);
    $button.setAttribute('src', image.alt);
    $button.setAttribute('id', image.alt);
    $button.setAttribute('class', 'btn-round');
    $button.setAttribute('data-order', i);
    // console.log('button ' + i, $button)
    $dotsRow.append($button);
  });
}

function switchImage(index) {
  const image = images[index];
  $carouselImage.setAttribute('src', image.src);
  $carouselImage.setAttribute('alt', image.alt);
}

function startInterval() {
  interval = setInterval(() => {
    if (count === images.length) {
      count = 0;
    }
    // console.log('count', count)
    switchImage(count);
    // const image = images[count];
    // $carouselImage.setAttribute('src', image.src);
    // $carouselImage.setAttribute('alt', image.alt);
    count++;
  }, 3000);
}

document.addEventListener('DOMContentLoaded', () => {
  createButtons();
  startInterval();
});

$dotsRow.addEventListener('click', ({ target }) => {
  if (target.tagName !== 'BUTTON') {
    return;
  }
  // remove .fill class from previous element
  const roundButtons = document.querySelectorAll('.btn-round');
  for (let i = 0; i < roundButtons.length; i++) {
    const $button = roundButtons[i];
    // console.log('$button ', $button)
    if ($button === target) {
      $button.classList.add('fill');
    } else {
      $button.classList.remove('fill');
    }
  }
  const order = Number.parseInt(target.getAttribute('data-order'));
  console.log('button data-order:', order);
  count = order;
  // clearInterval(interval);
  switchImage(count);
  // console.log('target', e.target)
});
