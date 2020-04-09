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
	const allUsers = await serviceUser.allUsr();
	res.status(201).send(allUsers);
};

exports.getUserId = async (req, res) => {
	let infoUserId = await serviceUser.getUserToId(req.params.userId, req.body);
	res.status(201).send(infoUserId);
};

exports.patchUserId = async (req, res) => {
	let infoUserPatch = await serviceUser.patchUserToId(
		req.params.usrId,
		req.body
	);
	res.status(201).send(infoUserPatch);
};

exports.removeUserId = async (req, res) => {
	let infoUserRemove = await serviceUser.removeUserToId(req.params.removeId);
	res.status(201).send(infoUserRemove);
};
