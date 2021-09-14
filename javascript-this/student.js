/* exported student */

const student = {
  firstName: 'Yunyun',
  lastName: 'Liu',
  subject: 'Underwater Basket Weaving',
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  getIntroduction() {
    // return `Hello, my name is ${this.getFullName()} and I am studying ${this.subject}`;
    return `Hello, my name is ${this.firstName} ${this.lastName} and I am studying ${this.subject}.`;
  }
};

// console.log(student.getIntroduction())
