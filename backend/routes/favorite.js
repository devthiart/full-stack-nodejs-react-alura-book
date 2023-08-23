const { Router } = require("express");
const { getFavoriteList, postFavorite, deleteFavorite } = require('../controllers/favorites');

const router = Router();

router.get('/', getFavoriteList);

router.post('/:id', postFavorite);

router.delete('/:id', deleteFavorite);

module.exports = router;