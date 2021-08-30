let timesClicked = 0;

const $hotButton = document.querySelector('.hot-button');
const $clickCount = document.querySelector('.click-count');

function handleClick(e) {
  timesClicked++;
  $clickCount.textContent = `Clicks: ${timesClicked}`;
  // console.log('clickCount textContent', );
  if (timesClicked < 4) {
    $hotButton.className = 'hot-button cold';
  } else if (timesClicked < 7) {
    $hotButton.className = 'hot-button cool';
  } else if (timesClicked < 10) {
    $hotButton.className = 'hot-button tepid';
  } else if (timesClicked < 13) {
    $hotButton.className = 'hot-button warm';
  } else if (timesClicked < 16) {
    $hotButton.className = 'hot-button hot';
  } else {
    $hotButton.className = 'hot-button nuclear';
  }
}
$hotButton.addEventListener('click', handleClick);
