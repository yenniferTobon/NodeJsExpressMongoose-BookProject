const userModel = require("../models/userModels");
const bcrypt = require("bcryptjs"); //to encrypt passwords
const usrnameNotAvailableException = require("../exceptions/userNotAvailableException");
const ReqFieldException = require("../exceptions/ReqFieldException");
//const db = require("../../app");
const NotAuthException = require("../exceptions/NotAuthException");
const userservice = require("./userServices");

exports.createUser = async user => {
	if (!user) {
		throw new ReqFieldException("Usuario");
	}
	let usernameExist = await userModel.findOne({ username: user.username });
	// validat
	if (usernameExist) {
		throw new usrnameNotAvailableException(user.username);
	}
	const userEncrypt = await userservice.encryptPassword(user);
	return await userModel.create(userEncrypt);
};

exports.allUsr = async () => {
	let allusers = await userModel.find();
	return allusers;
};

exports.getUserToId = async userId => {
	if (!userId) {
		throw new ReqFieldException("el Id");
	}
	let infoUser;
	try {
		infoUser = await userModel.findById(userId).select({ password: 0 });
	} catch (err) {
		throw new NotAuthException("Id con estructura no Valida");
	}
	return infoUser;
};

exports.patchUserToId = async (id, infoChange) => {
	if (!Id) {
		throw new ReqFieldException("el Id");
	}
	if (!infoChange) {
		throw new ReqFieldException("la informacion a modifica");
	}
	const userEncrypt = await userservice.encryptPassword(infoChange);
	const infoUserResult = await userModel
		.findByIdAndUpdate(id, userEncrypt, {
			new: true
		})
		.select({ password: 0 });
	return infoUserResult;
};

exports.removeUserToId = async id => {
	const removeUserPatch = await userModel.findByIdAndRemove(id);
	return removeUserPatch;
};

exports.encryptPassword = async user => {
	if (user.password) {
		const salt = await bcrypt.genSalt(10);
		const hashedPassword = bcrypt.hashSync(user.password, salt); // hash password
		user.password = hashedPassword;
	}
	return user;
};
