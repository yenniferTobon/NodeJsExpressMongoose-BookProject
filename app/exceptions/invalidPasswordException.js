class invalidPasswordException extends Error {
	constructor() {
		super("Password incorrecto");
		this.name = "invalidPasswordException";
		this.status = 401;
	}
}

module.exports = invalidPasswordException;
