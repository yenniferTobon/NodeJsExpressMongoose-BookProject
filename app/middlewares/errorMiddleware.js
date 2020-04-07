//module.exports = (err, req, res, next) => {
//	const status = err.status || 500;
//	return res.status(status).send({
//		status: status,
//		error: err.message || "Se ha presentado un error en la aplicación"
//	});
//};

module.exports = errorHandler;

function errorHandler(err, req, res, next) {
	if (typeof err === "string") {
		// custom application error
		return res.send({
			status: status,
			error: err.message || "Se ha presentado un error en la aplicación"
		});
	}

	// mongoose validation user already exists
	if (err.name === "usernameEqualsException") {
		return res.status(401).json({ status: err.status, message: err.message });
	}

	// mongoose validation username not Exist
	if (err.name === "userNotExistsException") {
		return res.status(404).json({ status: err.status, message: err.message });
	}

	// mongoose valid password
	if (err.name === "validNotPasswordException") {
		return res.status(401).json({ status: err.status, message: err.message });
	}

	// default to 500 server error
	err.message = "Se ha presentado un error en la ";
	return res.status(500).json({ message: err.message });
}
