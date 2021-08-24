var bookshelf = [
  {
    isbn: '978-1491929483',
    title: 'Introduction to JavaScript Object Notation: A To-the-Point Guide to JSON',
    author: 'Lindsay Bassett'
  },
  {
    isbn: '978-1484218624',
    title: 'JSON Quick Syntax Reference',
    author: 'Wallace Jackson'
  },
  {
    isbn: '978-0692232699',
    title: 'Build APIs You Won\'t Hate: Everyone and their dog wants an API, so you should probably learn how to build them',
    author: 'Phil Sturgeon & Laura Bohill'
  }
];
// 2.

var author1 = bookshelf[1].author;
console.log('book 2, author name:', author1);

// 3.

var isbn0 = bookshelf[0].isbn;
console.log('book 1, isbn:', isbn0);

// 4.

var title2 = bookshelf[2].title;
console.log('book 3, title:', title2);
