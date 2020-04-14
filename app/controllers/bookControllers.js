const serviceBook = require("../services/bookServices");

exports.getAllBooks = async (req, res) => {
	const allBooks = await serviceBook.getAllBooksExist(req.query);
	res.status(201).send(allBooks);
};

exports.createBook = async (req, res) => {
	const book = await serviceBook.createOneBook(req.body);
	if (!book) {
		res.status(500).send({ error: "El libro no ha podido ser creado" });
	}
	res.status(201).send(book);
};

exports.getBookId = async (req, res) => {
	let infoBookId = await serviceBook.getBookToId(req.params.bookId);
	res.status(201).send(infoBookId);
};

exports.patchBookId = async (req, res) => {
	let infoBookPatch = await serviceBook.patchBookToId(
		req.params.bokId,
		req.body
	);
	res.status(201).send(infoBookPatch);
};

exports.removeBookId = async (req, res) => {
	let infoBookRemove = await serviceBook.removeBookToId(req.params.removeId);
	res.status(201).send(infoBookRemove);
};
