import axios from 'axios';

const API_URL = 'http://localhost:8000/favorites';

const favoritesAPI = axios.create({baseURL: API_URL});

async function getFavorites() {
  const response = await favoritesAPI.get('/');

  return response.data;
}

async function postFavorites(id) {
  await favoritesAPI.post(`/${id}`);
}

async function deleteFavorites(id) {
  await favoritesAPI.delete(`/${id}`);
}

export {
  getFavorites,
  postFavorites,
  deleteFavorites
}
