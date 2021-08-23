// student object

var student = {
  firstName: 'Yunyun',
  lastName: 'Liu',
  age: 32
};

var fullName = student.firstName + ' ' + student.lastName;
console.log('fullName:', fullName);

student.livesInIrvine = false;
student.previousOccupation = 'student';

console.log('student livesInIrvine:', student.livesInIrvine);
console.log('student previousOccupation:', student.previousOccupation);

console.log('student:', student);

// vehicle object

var vehicle = {
  make: 'tesla',
  model: 'model S',
  year: 2021
};

vehicle['color'] = 'white';
vehicle['isConvertible'] = false;

console.log('vehicle color:', vehicle['color']);
console.log('vehicle isConvertible', vehicle['isConvertible']);

console.log('vehicle object:', vehicle);
// pet object

var pet = {
  name: 'Mikko',
  type: 'cat'
};
console.log('pet object:', pet);

delete pet.name;
delete pet.type;

console.log('pet object:', pet); // =(
