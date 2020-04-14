const bookModel = require("../models/bookModels");
//const usernameEqualsException = require("../exceptions/usernameEqualsException");
const db = require("../../app");

exports.getAllBooksExist = async queryBook => {
	if (queryBook.search == null) {
		const infoAllbook = await bookModel.find({});
		return infoAllbook;
	}
	const infoAllbook = await bookModel.find({
		$or: [
			{ nombre: { $regex: queryBook.search, $options: "i" } },
			{ autor: { $regex: queryBook.search, $options: "i" } },
			{ categoria: { $regex: queryBook.search, $options: "i" } }
		]
	});
	return infoAllbook;
};
exports.createOneBook = async book => {
	/*let bookExist = await bookModel.findOne({ username: book.username });
	// validat 
	if (bookExist) {
		throw new usernameEqualsException();
	}*/
	return await bookModel.create(book);
};

exports.getBookToId = async id => {
	const infoBook = await bookModel.findById(id);
	return infoBook;
};

exports.patchBookToId = async (id, infoChange) => {
	const infoBookPatch = await bookModel.findByIdAndUpdate(id, infoChange, {
		new: true
	});
	return infoBookPatch;
};

exports.removeBookToId = async id => {
	const removeBookPatch = await bookModel.findByIdAndRemove(id);
	return removeBookPatch;
};
