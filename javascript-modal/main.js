const $dialogModal = document.querySelector('dialog');
const $openButton = document.querySelector('.open-btn');
const $noButton = document.querySelector('.btn-dialog');

$openButton.addEventListener('click', e => $dialogModal.showModal());

$noButton.addEventListener('click', e => $dialogModal.close());
