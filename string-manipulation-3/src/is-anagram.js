/* exported isAnagram */
// 2 strings are anagrams if they have the same number of letter and the same frequency of each letter
// frequency counter pattern

function isAnagram(first, second) {
  const str1 = first.replaceAll(' ', '');
  const str2 = second.replaceAll(' ', '');
  if (str1.length !== str2.length) return false;
  const freq1 = {}; const freq2 = {};

  for (let i = 0; i < str1.length; i++) {
    const char = str1[i];
    freq1[char] ? freq1[char]++ : freq1[char] = 1;
  }

  for (let i = 0; i < str2.length; i++) {
    const char = str2[i];
    freq2[char] ? freq2[char]++ : freq2[char] = 1;
  }

  for (const char in freq1) {
    if (freq1[char] !== freq2[char]) return false;
  }
  return true;
}
