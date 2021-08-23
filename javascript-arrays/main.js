// colors array
var colors = ['red', 'white', 'blue'];

console.log('colors array:', colors);

console.log('colors[0]:', colors[0]);
console.log('colors[1]:', colors[1]);
console.log('colors[2]:', colors[2]);

console.log('America is ' + colors[0] + ', ' +
  colors[1] + ', and' + ' ' + colors[2] + '.');

colors[2] = 'green';
console.log('colors array:', colors);

console.log('Mexico is ' + colors[0] + ', ' +
  colors[1] + ', and' + ' ' + colors[2] + '.');

// students array

var students = ['Yunyun', 'Valerie', 'Jeff', 'Mikko'];
console.log('students array:', students);

var numberOfStudents = students.length;
console.log('numberOfStudents:', numberOfStudents);

var lastIndex = numberOfStudents - 1;
var lastStudent = students[lastIndex];
console.log('lastStudent:', lastStudent);
