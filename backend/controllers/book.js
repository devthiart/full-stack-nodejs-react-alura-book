const { getAllBooks, getBookById, insertBook, editBook, removeBookById } = require("../services/book");

function getBookList(req, res) {
  try {
    // throw new Error("Error: Testing error");
    const books = getAllBooks();
    res.send(books);
  }
  catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

function getBook(req, res) {
  try {
    const id = req.params.id;

    // Check if id exists and if it is a number.
    if(id && Number(id)) {
      const book = getBookById(id);
      res.send(book);
    } else {
      res.status(422); 
      res.send("Invalid ID");
    }

  }
  catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

function postBook(req, res) {
  try {
    const newBook = req.body;

    if(newBook.name && newBook.id) {
      insertBook(newBook);
      res.status(201); // 201: Created.
      res.send("Successfully created book");
    } else {
      res.status(422); 
      res.send("Field name and id are mandatory");
    }
  }
  catch(error) {
    res.status(500);
    res.send(error.message);
  }
}

function patchBook(req, res) {
  try {
    const id = req.params.id;

    if(id && Number(id)) {
      const body = req.body;
      editBook(body, id);
      res.status(200);
      res.send("Successfully edited book");
    } else {
      res.status(422); 
      res.send("Invalid ID");
    }
  }
  catch(error) {
    res.status(500);
    res.send(error.message);
  }
}

function deleteBook (req, res) {
  try {
    const id = req.params.id;
    
    if(id && Number(id)) {
      removeBookById(id);
      res.status(200);
      res.send("Successfully removed book");
    } else {
      res.status(422); 
      res.send("Invalid ID");
    }
  }
  catch(error) {
    res.status(500);
    res.send(error.message);
  }
}

module.exports = {
  getBookList,
  getBook,
  postBook,
  patchBook,
  deleteBook
}
