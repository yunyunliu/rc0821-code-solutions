function graduate(credential) {
  return function (fullName) {
    return `${fullName}, ${credential}`;
  };
}

const medicalSchool = graduate('M.D.');
const lawSchool = graduate('Esq.');

console.log('medical school:', medicalSchool('Dan Abramov'));
console.log('law School:', lawSchool('Ryan Florence'));
