const serviceAuthe = require("../services/autheServices");
const ReqFieldException = require("../exceptions/ReqFieldException");

exports.signIn = async (req, res) => {
	const username = req.body.username;
	const pass = req.body.password;
	if (!username) {
		throw new ReqFieldException("Username");
	}
	if (!pass) {
		throw new ReqFieldException("Password");
	}
	const token = await serviceAuthe.signIn(username, pass);
	if (!token) {
		res.status(401).send({ error: "Autenticación fallida" });
	}
	res.status(200).json({ token: token });
};
