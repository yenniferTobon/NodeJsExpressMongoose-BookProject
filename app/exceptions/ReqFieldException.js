class ReqFieldException extends Error {
	constructor(field) {
		super("No se ha enviado " + field + " que es requerido");
		this.name = "ReqFieldException";
		this.status = 404;
	}
}
module.exports = ReqFieldException;
