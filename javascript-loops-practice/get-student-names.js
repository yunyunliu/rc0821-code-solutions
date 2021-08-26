/* exported getStudentNames */
function getStudentNames(students) {
  const names = [];
  for (let i = 0; i < students.length; i++) {
    const name = students[i].name;
    names.push(name);
  }
  return names;
}
