module.exports = errorHandler;
function errorHandler(err, req, res, next) {
	const status = err.status;
	/*const usernameExist = "usernameNotAvailableException";
	const userNotExist = "userNotExistsException";
	const invalidpassword = "invalidPasswordException";
	const ReqFieldException = "ReqFieldException";
	const NotAuthException = "NotAuthException";*/

	if (
		err.name === "usernameNotAvailableException" ||
		err.name === "userNotExistsException" ||
		err.name === "invalidPasswordException" ||
		err.name === "ReqFieldException" ||
		err.name === "NotAuthException"
	) {
		return res.status(status).send({
			status: status,
			message: err.message
		});
	}
	return res.status(500).send({
		status: 500,
		message: "Se ha presentado un error en la aplicación"
	});
}
