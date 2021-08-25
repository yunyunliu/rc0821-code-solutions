// Math object

var a = 3;
var b = 10;
var c = 0;

var maximumValue = Math.max(a, b, c);
console.log('max value:', maximumValue);

var heroes = ['Superman', 'Wonder Woman', 'Cat Woman', 'Batman'];
console.log('heroes array:', heroes);

var randomNumber = Math.random() * heroes.length;
var randomIndex = Math.floor(randomNumber);

console.log('randomIndex:', randomIndex);

var randomHero = heroes[randomIndex];

console.log('randomHero:', randomHero);

// array methods

var library = [
  {
    title: 'Against The Grain',
    author: 'J K Huysmans'
  },
  {
    title: 'Flowers of Evil',
    author: 'Charles Baudelaire'
  },
  {
    title: 'The Temptation of Saint Anthony',
    author: 'Gustave Flaubert'
  }
];

var lastBook = library.pop();
console.log('lastBook:', lastBook);

var firstBook = library.shift();
console.log('firstBook:', firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);
library.unshift(css);
library.splice(1, 1);

console.log('library array:', library);

// string methods
var fullName = 'Yunyun Liu';
var firstAndLastName = fullName.split(' ');
console.log('firstAndLastName:', firstAndLastName);

var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();
console.log('sayMyName:', sayMyName);
