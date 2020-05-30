const bookModel = require('../models/bookModels');
const bookExistsException = require('../exceptions/bookExistsException');
const bookservice = require('./bookServices');
const userModel = require('../models/userModels');
const serviceUser = require('../services/userServices');

exports.getAllBooksExist = async (queryBook) => {
    if (queryBook.search == null) {
        const infoAllbook = await bookModel.find({});
        return infoAllbook;
    }
    const infoAllbook = await bookModel.find({
        $or: [
            { nombre: { $regex: queryBook.search, $options: 'i' } },
            { autor: { $regex: queryBook.search, $options: 'i' } },
            { categorias: { $regex: queryBook.search, $options: 'i' } }
        ]
    });
    return infoAllbook;
};
exports.createOneBook = async (book) => {
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

exports.removeBookToId = async (id) => {
    const removeBookPatch = await bookModel.findByIdAndRemove(id);
    return removeBookPatch;
};

exports.addBookFavorite = async (idUser, idBook) => {
    const infoUser = userModel.findOneAndUpdate(
        { _id: idUser },
        {
            $push: { favoritos: idBook }
        },
        { safe: true, new: true }
    );

    return infoUser;
};

exports.deleteBookFavorite = async (idUser, idBook) => {
    const infoUser = userModel.findOneAndUpdate(
        { _id: idUser },
        {
            $pull: { favoritos: idBook }
        },
        { new: true }
    );
    console.log('entro a delete');
    return infoUser;
};

exports.isBookFavorite = async (idUser, idBook) => {
    if (idUser) {
        const infoUser = await serviceUser.getUserToId(idUser);
        for (i = 0; i < infoUser.favoritos.length; i++) {
            if (infoUser.favoritos[i] == idBook) {
                return 'True';
            }
        }
        return 'False';
    }
};
