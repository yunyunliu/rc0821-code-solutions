const $bulbButton = document.querySelector('button');
const $body = document.body;
let isOn = true;

// default is light on

function toggleLight(event) {
  isOn = !isOn; // light off; switch to dark styling
  if (isOn) {
    $bulbButton.classList.remove('bulb-off');
    $body.classList.remove('bg-off');
  } else {
    $bulbButton.classList.add('bulb-off');
    $body.classList.add('bg-off');
  }
}

$bulbButton.addEventListener('click', toggleLight);
