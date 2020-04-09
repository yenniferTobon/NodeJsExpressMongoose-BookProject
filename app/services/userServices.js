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

exports.allUsr = async () => {
	let allusers = await userModel.find({});
	return allusers;
};

exports.getUserToId = async id => {
	const infoUser = await userModel.findById(id);
	/*	function (err, infouserid) {
		if (err) {
			throw err;
		}
		if (!infouserid) {
			res.send(404);
		}
		return infouserid;
	});*/
	return infoUser;
};

exports.patchUserToId = async (id, infoChange) => {
	const infoUserPatch = await userModel.findByIdAndUpdate(id, infoChange, {
		new: true
	});
	return infoUserPatch;
};

exports.removeUserToId = async id => {
	const removeUserPatch = await userModel.findByIdAndRemove(id);
	return removeUserPatch;
};
