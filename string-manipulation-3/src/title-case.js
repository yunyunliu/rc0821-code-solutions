/* exported titleCase */
/*
split string into array of of words
- loop through array of words
at each index check
- index === 0? -> always capitalize
- word begins with '-' -> capitalized string[1]
- word === 'javascript' or 'api -> always 'JavaScript' or  'API'
- length of word <= 3 -> no capitalizing,
then loop again checking for ':'
*/
function capitalize(word) {
  // check for exception words
  if (word.toLowerCase() === 'javascript') {
    return 'JavaScript';
  }
  if (word.toLowerCase() === 'api') {
    return 'API';
  }
  return word[0].toUpperCase() +
       word.slice(1);
}

function capitalizeTitleParts(titlePart) {
  const titleWords = titlePart.split(' ');
  const capitalized = [];
  const minorWords = ['and', 'or', 'nor', 'but', 'a', 'an', 'the',
    'as', 'at', 'by', 'for', 'in', 'of', 'on', 'per', 'to'];

  for (let i = 0; i < titleWords.length; i++) {
    const word = titleWords[i];
    // check for words with hyphens
    if (word.includes('-')) {
      const split = word.split('-');
      const first = split[0];
      const second = split[1];
      const bothCapitalized = capitalize(first) +
        '-' + capitalize(second);
      capitalized.push(bothCapitalized);
    } else
    // check for first word in title, not minor exception word
    if ((i === 0) ||
      // (word.length > 3) ||
      !minorWords.includes(word)) {
      capitalized.push(capitalize(word));
    } else {
      capitalized.push(word);
    }
  }
  return capitalized;
}

function titleCase(string) {
  let title;
  // check if for title:subtitle structure
  if (string.includes(':')) {
    // split title into title and subtitle
    const titleParts = string.split(': ');
    const mainTitle = titleParts[0];
    const subtitle = capitalize(titleParts[1]);
    // capitalize subtitle
    const capSubTitle = capitalizeTitleParts(subtitle);
    const capTitle = capitalizeTitleParts(mainTitle);

    // turn arrays back into strings
    title = capTitle.join(' ') + ': ' + capSubTitle.join(' ');
  } else {
    const titleArr = capitalizeTitleParts(string);
    title = titleArr.join(' ');
  }
  return title;
}
