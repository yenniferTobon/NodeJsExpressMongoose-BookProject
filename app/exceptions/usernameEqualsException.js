class usernameEqualsException extends Error {
	constructor() {
		super(" Error, Username ya existe");
		this.status = 401;
	}
}

module.exports = usernameEqualsException;
