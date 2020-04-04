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

	if (err.name === "ValidationError") {
		// mongoose validation error
		return res.status(400).json({ message: err.message });
	}
}
//
//	// default to 500 server error
//	return res.status(500).json({ message: err.message });
//}
