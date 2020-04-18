class userNotExistsException extends Error {
	constructor(field) {
		super(" Error, " + field + " no fue encontrado");
		this.name = "userNotExistsException";
		this.status = 404;
	}
}

module.exports = userNotExistsException;
