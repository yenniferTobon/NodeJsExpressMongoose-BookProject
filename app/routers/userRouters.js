const contUser = require("../controllers/userControllers");
const authMiddle = require("../middlewares/authMiddleware");
const validations = require("../validation/validationFiels");

module.exports = router => {
	router.route("/auth/signup").post(validations.validate(), contUser.signUp);
	router.route("/user").get(authMiddle, contUser.getAllUsers);
	router.route("/user/:userId").get(authMiddle, contUser.getUserId);
	router.route("/user/:usrId").patch(authMiddle, contUser.patchUserId);
	router.route("/user/:removeId").delete(authMiddle, contUser.removeUserId);
};
