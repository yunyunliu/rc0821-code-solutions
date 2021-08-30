/* exported isAnagram */
// spaces don't matter
// 1. remove all spaces from both input strings
// compare lengths; if not same lenght return false
// if same length iterate through one string
// at each index check if character in other string;

function removeSpacesAndSplit(string) {
  const str = string.replaceAll(' ', '');
  return str.split('');
}

// console.log(removeSpaces('school master'.split('')));

function isAnagram(firstString, secondString) {

  // turn strings into arrays with no spaces

  const firstArr = removeSpacesAndSplit(firstString);
  const secondArr = removeSpacesAndSplit(secondString);

  //  console.log('firstArr', firstArr);
  //   console.log('secondArr', secondArr);

  // if the two strings don't have the same number of letters, they can't be anagrams

  if (firstArr.length !== secondArr.length) {
    return false;
  }
  const remainingChars = secondArr.slice();
  for (let i = 0; i < firstArr.length; i++) {

    const letter = firstArr[i];
    if (remainingChars.includes(letter)) {
      const index = remainingChars.indexOf(letter);
      remainingChars.splice(index, 1);
      continue;
    }
    return false;
  }
  return true;
}
