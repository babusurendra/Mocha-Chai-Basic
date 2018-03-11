var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var booksSchema = new Schema({
	'title' : String,
	'year' : Number,
	'author' : String
});

module.exports = mongoose.model('books', booksSchema);
