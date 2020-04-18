class NotAuthException extends Error {
	constructor(field) {
		super(field);
		this.status = 401;
		this.name = "NotAuthException";
	}
}

module.exports = NotAuthException;
