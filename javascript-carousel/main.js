const $dotsRow = document.getElementById('dot-container');
const $carouselImage = document.getElementById('carousel-image');
const $nextButton = document.getElementById('next');
const $previousButton = document.getElementById('previous');

function createButtons() {
  data.images.forEach((image, i) => {
    const $button = document.createElement('button');
    $button.setAttribute('src', image.src);
    $button.setAttribute('alt', image.alt);
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
    if ($button.getAttribute('data-order') == data.current) {
      $button.classList.add('fill');
    } else {
      $button.classList.remove('fill');
    }
  }
}

function switchImage() {
  // if showing the last image in array
  if (data.current === data.images.length) {
    data.current = 0;
  }
  // if showing the first image in array
  if (data.current < 0) {
    data.current = data.images.length - 1;
  }
  // console.log('data.current:', data.current)
  const image = data.images[data.current];
  $carouselImage.setAttribute('src', image.src);
  $carouselImage.setAttribute('alt', image.alt);
  $carouselImage.setAttribute('data-order', data.current);
  fillSelectedButton();
}

function startInterval() {
  data.interval = setInterval(() => {
    switchImage();
    data.current++;
  }, 3000);
}

// function switchAndReset() {
//   clearInterval(data.interval);
//   switchImage();
//   startInterval();
// }

document.addEventListener('DOMContentLoaded', () => {
  createButtons();
  startInterval();
});

$dotsRow.addEventListener('click', ({ target }) => {
  if (target.tagName !== 'BUTTON') {
    return;
  }
  const order = Number.parseInt(target.getAttribute('data-order'));
  data.current = order;
  // switchAndReset();
  switchImage();
});

$nextButton.addEventListener('click', () => {
  const next = Number.parseInt($carouselImage.getAttribute('data-order')) + 1;
  data.current = next;
  switchImage();
});

$previousButton.addEventListener('click', () => {
  const prev = Number.parseInt($carouselImage.getAttribute('data-order')) - 1;
  data.current = prev;
  switchImage();
});
