const $text = document.querySelector('.phrase');

function setPhrase(string) {
  const chars = string.split('');
  chars.forEach(char => {
    const $character = document.createElement('span');
    $character.textContent = char;
    $text.appendChild($character);
  });
}

function setFirstNodeAsCurrent(nodelist) {
  const $first = nodelist[0];
  $first.classList.add('current');
}

const prompt = 'grumpy wizards make toxic brew';
setPhrase(prompt);

const characterNodelist = document.querySelectorAll('span');
setFirstNodeAsCurrent(characterNodelist);

let characterCount = 0;

function checkKeystroke(e) {
  const $current = characterNodelist[characterCount];
  if ($current.textContent === '') {
    $current.textContent = ' ';
  }
  $current.classList.add('current');
  //  console.log(e.key, e.code)
  if (e.key === $current.textContent) {
    $current.classList.add('correct');
    $current.classList.remove('wrong', 'current');
    const $next = characterNodelist[characterCount + 1];
    $next.classList.add('current');
    characterCount++;
  } else {
    $current.classList.add('wrong');
  }
  // console.log('key', e.key, 'keyCode', e.code);

}

document.addEventListener('keydown', checkKeystroke);
