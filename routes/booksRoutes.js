var express = require('express');
var router = express.Router();
var booksController = require('../controllers/booksController.js');

/*
 * GET
 */
router.get('/', booksController.list);

/*
 * GET
 */
router.get('/:id', booksController.show);

/*
 * POST
 */
router.post('/', booksController.create);

/*
 * PUT
 */
router.put('/:id', booksController.update);

/*
 * DELETE
 */
router.delete('/:id', booksController.remove);

module.exports = router;
