const userModel = require("../models/userModels");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const config = require("../configs/config");
const userNotExistsException = require("../exceptions/userNotExistsException");
const validNotPasswordException = require("../exceptions/validNotPasswordException");

exports.signIn = async (user, pass) => {
	let userExist = await userModel.findOne({ username: user.username }); //
	if (!userExist) {
		throw new userNotExistsException();
	}

	//return the token by the user id
	const validPassword = await bcrypt.compare(user.password, userExist.password);
	if (!validPassword) {
		console.log(validPassword);
		throw new validNotPasswordException();
	}

	//return the token by the user id
	const token = jwt.sign({ user: userExist._id }, config.SECRET, {
		expiresIn: 10000
	});
	return token;
};
