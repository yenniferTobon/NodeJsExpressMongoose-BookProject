const contUser = require("../controllers/userControllers");

module.exports = router => {
	router.route("/auth/signup").post(contUser.signUp);
	router.route("/user").get(contUser.getAllUsers);
};
