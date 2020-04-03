const contAuth = require("../controllers/autheControllers");

module.exports = router => {
	router.route("/auth/signup").post(contAuth.signUp);
};
