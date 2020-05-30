class bookExistsException extends Error {
    constructor(field) {
        super('El libro ' + field + ' ya es Favorito');
        this.name = 'bookExistsException';
        this.status = 404;
    }
}
module.exports = bookExistsException;
