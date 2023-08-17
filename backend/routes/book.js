const { Router } = require("express");
const { getBookList, getBook, postBook, patchBook, deleteBook } = require("../controllers/book");

const router = Router();

router.get('/', getBookList);

router.get('/:id', getBook); // Get :id value using req.params.id in getBook function.

router.post('/', postBook);

router.patch('/:id', patchBook);

router.delete('/:id', deleteBook);

module.exports = router;
