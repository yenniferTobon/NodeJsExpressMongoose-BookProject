class userNotAvailableException extends Error {
	constructor(field) {
		super(" Error, el username " + field + " ya existe");
		this.name = "usernameNotAvailableException";
		this.status = 401;
	}
}

module.exports = userNotAvailableException;
