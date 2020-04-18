const userModel = require("../models/userModels");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const config = require("../configs/config");
const userNotExistsException = require("../exceptions/userNotExistsException");
const invalidPasswordException = require("../exceptions/invalidPasswordException");

exports.signIn = async (usrname, pass) => {
	let userExist = await userModel.findOne({ username: usrname }); //
	if (!userExist) {
		throw new userNotExistsException("el username" + usrname);
	}

	//return the token by the user id
	const validPassword = await bcrypt.compare(pass, userExist.password);
	if (!validPassword) {
		throw new invalidPasswordException();
	}

	//return the token by the user id
	const token = jwt.sign({ user: userExist._id }, config.SECRET, {
		expiresIn: 10000
	});
	return token;
};
