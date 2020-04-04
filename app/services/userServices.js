const userModel = require("../models/userModels");
const bcrypt = require("bcryptjs"); //to encrypt passwords
usernameEqualsException = require("../exceptions/usernameEqualsException");

//async function create(userParam) {

//    //const user = new userModel(userParam);
//
//    // hash password
//    if (userParam.password) {
//        user.hash = bcrypt.hashSync(userParam.password, 10);
//    }
//    await user.save(); // save user
//}

exports.createUser = async user => {
	let juan = await userModel.findOne({ username: user.username });
	// validat
	if (juan) {
		throw new usernameEqualsException();
	}

	if (user.password) {
		const hashedPassword = bcrypt.hashSync(user.password, 10); // hash password
		user.password = hashedPassword;
	}
	return await userModel.create(user);
};
