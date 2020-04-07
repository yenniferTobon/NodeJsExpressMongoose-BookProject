class userNotExistsException extends Error {
	constructor() {
		super(" Error, User no fue encontrado");
		this.name = "userNotExistsException";
		this.status = 404;
	}
}

module.exports = userNotExistsException;
