const books = [
  {
    title: 'Les Fleurs du Mal',
    author: 'Baudelaire',
    isbn: '666-1-344567-56-3'
  },
  {
    title: 'Au Rebours',
    author: 'J K Huysmans',
    isbn: '666-1-344787-57-3'
  },
  {
    title: 'Les Paradis Artificiels',
    author: 'Baudelaire',
    isbn: '666-9-784787-57-4'
  }
];

const stringifiedBooks = JSON.stringify(books);

console.log('books array:', books);
console.log('typeof books array:', typeof books);

console.log('stringify books array:', stringifiedBooks);
console.log('typeof stringify books array:', typeof stringifiedBooks);
const student = '{"name":"yunyun","id":"18722"}';
console.log('JSON string student:', student);

console.log('JSON string student type:', typeof student);
console.log('parsed student :', JSON.parse(student));
console.log('parsed student type:', typeof JSON.parse(student));
