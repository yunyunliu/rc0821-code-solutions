const $carouselImage = document.getElementById('carousel-image');

document.addEventListener('DOMContentLoaded', () => {
  const interval = setInterval(() => {
    if (count === images.length) {
      count = 0;
    }
    console.log('count', count)
    const image = images[count];
    $carouselImage.setAttribute('src', image.src);
    $carouselImage.setAttribute('alt', image.alt);
    count++;
  }, 3000);
});

const $dotsRow = document.getElementById('dot-container');

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
  // console.log('target', e.target)
});
