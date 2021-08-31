const $phrase = document.querySelector('.phrase');

function setPhrase(string) {
  const chars = string.split('');
  chars.forEach(char => {
    const $character = document.createElement('span');
    $character.textContent = char;
    $phrase.appendChild($character);
  });
}

const prompt = 'grumpy wizards make toxic brew';
setPhrase(prompt);

const characterNodelist = document.querySelectorAll('span');

let characterCount = 0;

function checkKeystroke(e) {
  const $currentChar = characterNodelist[characterCount];
  if ($currentChar.textContent === '') {
    $currentChar.textContent = ' ';
  }
  $currentChar.classList.add('current');
  //  console.log(e.key, e.code)
  if (e.key === $currentChar.textContent) {
    $currentChar.classList.add('correct');
    $currentChar.classList.remove('wrong');

    // console.log('correct!', e.czode);
    // increment characterCount
    $currentChar.classList.remove('current');

    characterCount++;
  } else {
    $currentChar.classList.add('wrong');
  }
  // console.log('key', e.key, 'keyCode', e.code);

}

document.addEventListener('keydown', checkKeystroke);
