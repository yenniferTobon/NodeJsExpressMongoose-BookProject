const serviceUser = require("../services/userServices");
const ReqFieldException = require("../exceptions/ReqFieldException");
const userNotExistsException = require("../exceptions/userNotExistsException");

exports.signUp = async (req, res) => {
	if (!req.body.name) {
		throw new ReqFieldException("el campo Name");
	}
	if (!req.body.username) {
		throw new ReqFieldException("el campo Username");
	}
	if (!req.body.password) {
		throw new ReqFieldException("el campo Password");
	}
	const user = await (await serviceUser.createUser(req.body)).toJSON();
	if (!user) {
		res.status(500).send({ error: "El usuario no ha podido ser creado" });
	}
	delete user.password;
	res.status(201).send(user);
};

exports.getAllUsers = async (req, res) => {
	let allUsers = await serviceUser.allUsr();
	for (i = 0; i < allUsers.length; i++) {
		allUsers[i] = allUsers[i].toJSON();
		delete allUsers[i].password;
	}
	res.status(201).send(allUsers);
};

exports.getUserId = async (req, res) => {
	let infoUserId = await serviceUser.getUserToId(req.params.userId);
	if (infoUserId === null) {
		throw new userNotExistsException("el usuario con Id " + req.params.userId);
	}
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
