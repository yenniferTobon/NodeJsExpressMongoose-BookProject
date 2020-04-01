const userModel = require('../models/userModels');
const bcrypt = require('bcryptjs'); //to encrypt passwords

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
    return await userModel.create(user);
};
