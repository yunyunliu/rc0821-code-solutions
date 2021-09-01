function handleFocus(event) {
  console.log('"focus" event has fired');
  console.log('name:', event.target.name);
}

function handleBlur(event) {
  console.log('"blur" event has fired');
  console.log('name:', event.target.name);
}

function handleInput(event) {
  console.log('name:', event.target.name, 'value:', event.target.value);
}

const inputList = document.querySelectorAll('input');
const $textArea = document.querySelector('textarea');

const [$textInput, $emailInput] = inputList;
$textInput.addEventListener('focus', handleFocus);
$textInput.addEventListener('blur', handleBlur);
$textInput.addEventListener('input', handleInput);

$emailInput.addEventListener('focus', handleFocus);
$emailInput.addEventListener('blur', handleBlur);
$emailInput.addEventListener('input', handleInput);

$textArea.addEventListener('focus', handleFocus);
$textArea.addEventListener('blur', handleBlur);
$textArea.addEventListener('input', handleInput);

const $contactForm = document.querySelector('#contact-form');
console.log($contactForm.elements);
$contactForm.addEventListener('submit', e => {
  e.preventDefault();
  const emailVal = $contactForm.elements.email.value;
  const nameVal = $contactForm.elements.name.value;
  const messageVal = $contactForm.elements.message.value;
  const values = {
    name: nameVal,
    email: emailVal,
    message: messageVal
  };
  console.log('values obj', values);
  $contactForm.reset();
});
