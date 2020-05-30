const serviceBook = require('../services/bookServices');

exports.getAllBooks = async (req, res) => {
    const allBooks = await serviceBook.getAllBooksExist(req.query);
    res.status(201).send(allBooks);
};

exports.createBook = async (req, res) => {
    const book = await serviceBook.createOneBook(req.body);
    if (!book) {
        res.status(500).send({ error: 'El libro no ha podido ser creado' });
    }
    res.status(201).send(book);
};

exports.getBookId = async (req, res) => {
    let infoBookId = await (
        await serviceBook.getBookToId(req.user, req.params.libroId)
    ).toJSON();
    /*if (req.user) {
		const infoUser = await serviceUser.getUserToId(req.user);
		infoBookId.isFavorite = "False";
		for (i = 0; i < infoUser.favoritos.length; i++) {
			if (infoUser.favoritos[i] == req.params.bookId) {
				infoBookId["isFavorite"] = "True";
			}
		}
	}*/
    res.status(201).send(infoBookId);
};

exports.patchBookId = async (req, res) => {
    let infoBookPatch = await serviceBook.patchBookToId(
        req.params.libroId,
        req.body
    );
    res.status(201).send(infoBookPatch);
};

exports.removeBookId = async (req, res) => {
    let infoBookRemove = await serviceBook.removeBookToId(req.params.libroId);
    res.status(201).send(infoBookRemove);
};

exports.addFavorite = async (req, res) => {
    let infoUserResult;
    if (req.user) {
        /*let infoUser = await (await serviceUser.getUserToId(req.user)).populate(
			book
		);*/
        infoUserResult = await serviceBook.addBookFavorite(
            req.user,
            req.params.libroId
        );
    }
    res.status(201).send(infoUserResult);
};
