const fs = require('fs'); // File System -> To manipulate files.

function getAllBooks() {
  return JSON.parse(fs.readFileSync('books.json'));
}

function getBookById(id) {
  const books = JSON.parse(fs.readFileSync('books.json'));

  const foundBookById = books.filter( book => book.id === id )[0];

  return foundBookById;
}

function insertBook(book) {
  const books = JSON.parse(fs.readFileSync('books.json'));

  const newBookList = [ ...books, book ];

  fs.writeFileSync('books.json', JSON.stringify(newBookList));
}

function editBook(modifications, id) {
  let currentBooks = JSON.parse(fs.readFileSync('books.json'));
  const bookIndexToModify = currentBooks.findIndex(book => book.id === id);

  const bookModified = { ...currentBooks[bookIndexToModify], ...modifications }

  currentBooks[bookIndexToModify] = bookModified;

  fs.writeFileSync('books.json', JSON.stringify(currentBooks));
}

function removeBookById(id) {
  const bookList = JSON.parse(fs.readFileSync('books.json'));

  const newBookList = bookList.filter( (book) => book.id !== id );

  fs.writeFileSync('books.json', JSON.stringify(newBookList));
}

module.exports = {
  getAllBooks,
  getBookById,
  insertBook,
  editBook,
  removeBookById
}
