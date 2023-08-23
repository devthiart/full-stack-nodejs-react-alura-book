const fs = require('fs'); // File System -> To manipulate files.

function getAllFavorites() {
  return JSON.parse(fs.readFileSync('favorites.json'));
}

function insertFavoriteBook(id) {
  const books = JSON.parse(fs.readFileSync('books.json'));
  const favorites = JSON.parse(fs.readFileSync('favorites.json'));

  const newFavoriteBook = books.find( (book) => {
    return book.id === id;
  })

  const newFavoriteBookList = [...favorites, newFavoriteBook];

  fs.writeFileSync('favorites.json', JSON.stringify(newFavoriteBookList));
}

function removeFavoriteById(id) {
  const bookList = JSON.parse(fs.readFileSync('favorites.json'));

  const newBookList = bookList.filter( (book) => book.id !== id );

  fs.writeFileSync('favorites.json', JSON.stringify(newBookList));
}

module.exports = {
  getAllFavorites,
  removeFavoriteById,
  insertFavoriteBook
}
