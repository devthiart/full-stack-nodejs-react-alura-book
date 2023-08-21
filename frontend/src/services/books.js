import axios from 'axios';

const API_URL = 'http://localhost:8000/books';

const booksAPI = axios.create({baseURL: API_URL});

async function getBooks() {
  const response = await booksAPI.get('/');

  return response.data;
}

export {
  getBooks
}
