class bookExistsException extends Error {
	constructor(field) {
		console.log("hola");
		super("No se ha enviado " + field + " que es requerido");
		this.name = "bookExistsException";
		this.status = 404;
	}
}
module.exports = bookExistsException;
