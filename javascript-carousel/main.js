const $dotsRow = document.getElementById('dot-container');
const $carouselImage = document.getElementById('carousel-image');
const $nextButton = document.getElementById('next');
const $previousButton = document.getElementById('previous');

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
  const $first = document.getElementById(images[0].alt);
  $first.classList.add('fill');
}

function fillSelectedButton() {
   // remove .fill class from previous element
  const roundButtons = document.querySelectorAll('.btn-round');
  for (let i = 0; i < roundButtons.length; i++) {
    const $button = roundButtons[i];
    // console.log('$button ', $button)
    if ($button.getAttribute('data-order') == count) {
      $button.classList.add('fill');
    } else {
      $button.classList.remove('fill');
    }
  }
}

function switchImage() {
  if (count === images.length) {
    count = 0;
  }
  if (count < 0) {
    count = images.length - 1;
  }
  const image = images[count];
  $carouselImage.setAttribute('src', image.src);
  $carouselImage.setAttribute('alt', image.alt);
  $carouselImage.setAttribute('data-order', count);
  fillSelectedButton();
}

function startInterval() {
  interval = setInterval(() => {
    switchImage();
    count++;
  }, 3000);
}

function switchAndReset() {
  clearInterval(interval);
  switchImage();
  startInterval();
}

document.addEventListener('DOMContentLoaded', () => {
  createButtons();
  startInterval();
});

$dotsRow.addEventListener('click', ({ target }) => {
  if (target.tagName !== 'BUTTON') {
    return;
  }
  const order = Number.parseInt(target.getAttribute('data-order'));
  count = order;
  switchAndReset();
});

$nextButton.addEventListener('click', () => {
  const nextCount = Number.parseInt($carouselImage.getAttribute('data-order')) + 1;
  count = nextCount;
  switchAndReset();
});

$previousButton.addEventListener('click', () => {
  const prevCount = Number.parseInt($carouselImage.getAttribute('data-order')) - 1;
  count = prevCount;
  switchAndReset();
});
