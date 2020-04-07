const userModel = require("../models/userModels");
const bcrypt = require("bcryptjs"); //to encrypt passwords
const usernameEqualsException = require("../exceptions/usernameEqualsException");
const db = require("../../app");

exports.createUser = async user => {
	let userExist = await userModel.findOne({ username: user.username });
	// validat
	if (userExist) {
		throw new usernameEqualsException();
	}

	if (user.password) {
		const salt = await bcrypt.genSalt(10);
		const hashedPassword = bcrypt.hashSync(user.password, salt); // hash password
		user.password = hashedPassword;
	}
	return await userModel.create(user);
};

/*exports.allUsr = async (req, res) => {
	console.log("entro al servicio");

	const users = await userModel.find({});
	//.toArray();
	return users;
};*/

exports.allUsr = async (req, res) => {
	let allusers = await userModel.find({});
	if (!allusers) {
		res.status(400).send({ error: "No hay usuariosssss" });
	}
	return allusers;
};
