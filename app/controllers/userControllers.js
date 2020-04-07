const serviceUser = require("../services/userServices");

exports.signUp = async (req, res) => {
	const user = await (await serviceUser.createUser(req.body)).toJSON();
	if (!user) {
		res.status(500).send({ error: "El usuario no ha podido ser creado" });
	}
	delete user.password;
	res.status(201).send(user);
};

exports.getAllUsers = async (req, res) => {
	const allUsers = await serviceUser.allUsr(req.body);
	if (!allUsers) {
		res.status(400).send({ error: "No hay usuarios" });
	}
	res.status(201).json(allUsers);
};
