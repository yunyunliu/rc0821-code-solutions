// 1. convertMinutesToSeconds
function convertMinutesToSeconds(minutes) {
  return minutes * 60;
}

var minsToSecondsResult = convertMinutesToSeconds(5);

console.log('expected: 300', 'actual:', minsToSecondsResult);

// 2. greet

function greet(name) {
  return `Hi, ${name}! How are you? `;
}

var greetYunyun = greet('Yunyun');
console.log('expected: Hi, Yunyun! How are you?', 'actual:', greetYunyun);

// 3. getArea

function getArea(width, height) {
  return width * height;
}

var getAreaResult = getArea(17, 42);

console.log('expected:', 17 * 42, 'actual:', getAreaResult);

// 4. getFirstName

function getFirstName(person) {
  return person.firstName;
}

var getName = getFirstName({ firstName: 'Yunyun', lastName: 'Liu' });

console.log('expected: Yunyun', 'actual:', getName);

// 5. getLastElement
function getLastElement(array) {
  return array[array.length - 1];
}

var lastElement = getLastElement(['propane', 'and', 'propane', 'accessories']);

console.log('expected: accessories', 'actual:', lastElement);
