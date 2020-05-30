class bookExistsException extends Error {
    constructor(field) {
        super('No se ha enviado ' + field + ' que es requerido');
        this.name = 'bookExistsException';
        this.status = 404;
    }
}
module.exports = bookExistsException;
