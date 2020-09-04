/* eslint-disable no-console */
const books = [
  {
    isbn: '0446310786',
    title: 'To Kill A Mockingbird',
    author: 'Harper Lee'
  },
  {
    isbn: '9781451673319',
    title: 'Fahreinheit 451',
    author: 'Ray Bradbury'
  },
  {
    isbn: '9780451524935',
    title: '1984',
    author: 'George Orwell'
  }
];
const booksString = JSON.stringify(books);

console.log(booksString, 'type: ' + typeof (booksString));
var student = '{ "id": 10, "name": "Daniel" }';
var studentInfo = JSON.parse(student);
console.log(studentInfo, 'type: ' + typeof (studentInfo));
