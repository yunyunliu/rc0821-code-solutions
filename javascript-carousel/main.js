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

function switchImage(index = count) {
  if (count === images.length) {
    count = 0;
  }
  if (count < 0) {
    count = images.length - 1;
  }
  const image = images[count];
  $carouselImage.setAttribute('src', image.src);
  $carouselImage.setAttribute('alt', image.alt);
  fillSelectedButton();
}

function startInterval() {
  interval = setInterval(() => {
    // if (count === images.length) {
    //   count = 0;
    // }
    // if (count < 0) {
    //   count = images.length - 1;
    // }
    // console.log('count', count)
    switchImage();
    // const image = images[count];
    // $carouselImage.setAttribute('src', image.src);
    // $carouselImage.setAttribute('alt', image.alt);
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
  // remove .fill class from previous element
  // const roundButtons = document.querySelectorAll('.btn-round');
  // for (let i = 0; i < roundButtons.length; i++) {
  //   const $button = roundButtons[i];
  //   // console.log('$button ', $button)
  //   if ($button === target) {
  //     $button.classList.add('fill');
  //   } else {
  //     $button.classList.remove('fill');
  //   }
  // }
  const order = Number.parseInt(target.getAttribute('data-order'));
  count = order;
  // console.log('button data-order:', order);
  switchAndReset();
  // console.log('target', e.target)
});

$nextButton.addEventListener('click', () => {
  count++;
  switchAndReset();
});

$previousButton.addEventListener('click', () => {
  count--;
  switchAndReset();
});
