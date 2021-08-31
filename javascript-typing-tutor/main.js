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

const phrase = 'hello world';
setPhrase(phrase);

const characterNodelist = document.querySelectorAll('span');
setFirstNodeAsCurrent(characterNodelist);

let characterCount = 0;
let correct = 0;
let incorrect = 0;

function getRoundedAccuracy() {
  const accuracy = correct / (correct + incorrect);
  const str = accuracy + '';
  const truncated = str.slice(0, 4);
  return truncated;
}

function handleFinished() {
  if (characterCount === characterNodelist.length - 1) {
    const $dialog = document.createElement('dialog');
    const $accuracy = document.createElement('p');
    $accuracy.textContent = `Your accuracy is ${getRoundedAccuracy()}!`;
    const $close = document.createElement('button');
    $close.textContent =
    // $playAgain.textContent = 'Play again?';
    $dialog.appendChild($accuracy);
    document.body.appendChild($dialog);
    $dialog.showModal();
  }
}

function checkKeystroke(e) {
  if (characterCount < (characterNodelist.length)) {
    const $current = characterNodelist[characterCount];
    if ($current.textContent === '') {
      $current.textContent = ' ';
    }
    $current.classList.add('current');
    //  console.log(e.key, e.code)
    if (e.key === $current.textContent) {
      $current.classList.add('correct');
      $current.classList.remove('wrong', 'current');
      characterCount++;
      const $next = characterNodelist[characterCount];
      if ($next) {
        $next.classList.add('current');
      }
      correct++;
    } else {
      $current.classList.add('wrong');
      incorrect++;
    }
  }
}

document.addEventListener('keydown', checkKeystroke);
document.addEventListener('keyup', handleFinished);
