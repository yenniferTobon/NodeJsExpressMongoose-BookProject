/*function errorHandler(err, req, res, next) {
	return res.send({
		status: "error",
		error: err.message
	});
}*/

const yup = require("yup");

module.exports = (req, res, next) => {
	console.log("paso");
	const schema = yup.object().shape({
		name: yup
			.string()
			.min(5)
			.matches(/^[a-z]+$/)
			.required("No se ha enviado el campo name que es obligatorio"),
		username: yup
			.string()
			.min(5)
			.matches(/^[a-z]+$/)
			.required("No se ha enviado el campo username que es obligatorio"),
		password: yup
			.min(5)
			.required("No se ha enviado el campo password que es obligatorio")
	});
	console.log("aqui");
	schema.validateSync(req.body);
	console.log(schema);
};
