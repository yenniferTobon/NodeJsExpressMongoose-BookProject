const contAuth = require("../controllers/autheControllers");

module.exports = router => {
	router.route("/auth/signin").post(contAuth.signIn);
};
