const jwt = require("jsonwebtoken");
const config = require("../configs/config");
const authException = require("../exceptions/NotAuthException");

module.exports = (req, res, next) => {
	const token = req.headers["authorization"];
	if (!token && req.route.path != "/book/:bookId" && method == "GET") {
		throw new authException("Error, usuario no autorizado");
	}

	if (token) {
		jwt.verify(token, config.SECRET, (err, DecToken) => {
			if (err) {
				throw new authException("Inicie Sesion");
			}
			req.user = DecToken.user;
		});
	}
	next();
};
