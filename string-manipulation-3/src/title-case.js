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
  return word[0].toUpperCase() +
       word.slice(1);
}

function titleCase(string) {
  const titleWords = string.split(' ');
  const capitalized = [];
  const minorWords = ['and', 'or', 'nor', 'but', 'a', 'an', 'the',
    'as', 'at', 'by', 'for', 'in', 'of', 'on', 'per', 'to'];

  for (let i = 0; i < titleWords.length; i++) {
    const word = titleWords[i];
    // check for exception words
    if (word.toLowerCase() === 'javascript') {
      capitalized.push('JavaScript');
    } else if (word.toLowerCase() === 'api') {
      capitalized.push('API');

    // check for words with hyphens
    } else if (word.includes('-')) {
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
  const title = capitalized.join(' ');
  if (title.includes(':')) {
    // split title into title and subtitle
    const titleParts = title.split(': ');
    // capitalize subtitle
    const subtitle = capitalize(titleParts[1]);
    return titleParts[0] + ': ' + subtitle;
  }
  return title;
}
