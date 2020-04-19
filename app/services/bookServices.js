const bookModel = require("../models/bookModels");
const bookExistsException = require("../exceptions/bookExistsException");
//const db = require("../../app");
const bookservice = require("./bookServices");
const userModel = require("../models/userModels");
const serviceUser = require("../services/userServices");

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

exports.getBookToId = async (idUser, idBook) => {
	const infoBookId = await bookModel.findById(idBook);
	infoBookId.isFavorite = await bookservice.isBookFavorite(idUser, idBook);
	return infoBookId;
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

exports.addBookFavorite = async (idUser, idBook) => {
	console.log("aqui 1");
	const infoUser = userModel.findByIdAndUpdate(idUser, {
		$set: { favoritos: { id: idBook } }
	});
	//	.populate("book", "nombre descripcion autor");
	console.log(infoUser);
	/*const bookExits = await bookservice.isBookFavorite(idUser, idBook);
	console.log(bookExits);
	if (bookExits) {
	throw new bookExistsException("hola");
	}*/
	//const infoUser = infoUser.favoritos.push({ id: idBook });
	/*const sizeFavorites = infoUser.favoritos.length;
	console.log(sizeFavorites);
	if (sizeFavorites != 0) {
		infoUser.favoritos[sizeFavorites + 1] = idBook;
	} else {
		infoUser.favoritos[0] = idBook;
	}*/
	//console.log(infoUser1);
	//const infoUserResult = await serviceUser.patchUserToId(IdUser, infoUser);
	return infoUser;
};

exports.isBookFavorite = async (idUser, idBook) => {
	if (idUser) {
		const infoUser = await serviceUser.getUserToId(idUser);
		for (i = 0; i < infoUser.favoritos.length; i++) {
			if (infoUser.favoritos[i] == idBook) {
				return "True";
			}
		}
		return "False";
	}
};
