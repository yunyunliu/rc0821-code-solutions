const $bulbButton = document.querySelector('button');
const $body = document.body;

// default is light on

function toggleLight(event) {
  $bulbButton.classList.toggle('bulb-off');
  $body.classList.toggle('bg-off');
}

$bulbButton.addEventListener('click', toggleLight);
