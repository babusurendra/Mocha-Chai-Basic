var booksModel = require('../models/booksModel.js');

/**
 * booksController.js
 *
 * @description :: Server-side logic for managing bookss.
 */
module.exports = {

    /**
     * booksController.list()
     */
    list: function (req, res) {
        booksModel.find({},function (err, bookss) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting books.',
                    error: err
                });
            }
            return res.json(bookss);
        });
    },

    /**
     * booksController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        booksModel.findOne({_id: id}, function (err, books) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting books.',
                    error: err
                });
            }
            if (!books) {
                return res.status(404).json({
                    message: 'No such books'
                });
            }
            return res.json(books);
        });
    },

    /**
     * booksController.create()
     */
    create: function (req, res) {
        var books = new booksModel({
			title : req.body.title,
			year : req.body.year,
			author : req.body.author

        });

        books.save(function (err, books) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating books',
                    error: err
                });
            }
            return res.status(201).json(books);
        });
    },

    /**
     * booksController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        booksModel.findOne({_id: id}, function (err, books) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting books',
                    error: err
                });
            }
            if (!books) {
                return res.status(404).json({
                    message: 'No such books'
                });
            }

            books.title = req.body.title ? req.body.title : books.title;
			books.year = req.body.year ? req.body.year : books.year;
			books.author = req.body.author ? req.body.author : books.author;
			
            books.save(function (err, books) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating books.',
                        error: err
                    });
                }

                return res.json(books);
            });
        });
    },

    /**
     * booksController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        booksModel.findByIdAndRemove(id, function (err, books) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the books.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};
