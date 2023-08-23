const { getAllFavorites, insertFavoriteBook, removeFavoriteById } = require("../services/favorites");

function getFavoriteList(req, res) {
  try {
    const favorites = getAllFavorites();
    res.send(favorites);
  }
  catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

function postFavorite(req, res) {
  try {
    const id = req.params.id
    insertFavoriteBook(id);
    res.status(201); // 201: Created.
    res.send("Successfully created book");
  }
  catch(error) {
    res.status(500);
    res.send(error.message);
  }
}

function deleteFavorite (req, res) {
  try {
    const id = req.params.id;
    
    if(id && Number(id)) {
      removeFavoriteById(id);
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
  getFavoriteList,
  postFavorite,
  deleteFavorite
}
