function errorHandler(err, req, res, next) {
	return res.send({
		status: "error",
		error: err.message
	});
}
