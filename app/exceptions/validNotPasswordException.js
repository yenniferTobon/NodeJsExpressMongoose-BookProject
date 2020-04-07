class validNotPasswordException extends Error {
	constructor() {
		super("Password incorrecto");
		this.name = "validNotPasswordException";
		this.status = 401;
	}
}

module.exports = validNotPasswordException;
