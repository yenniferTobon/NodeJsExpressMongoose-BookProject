const contBook = require("../controllers/bookControllers");
const authMiddle = require("../middlewares/authMiddleware");

module.exports = router => {
	router.route("/libro").get(contBook.getAllBooks);
	router.route("/libro").post(authMiddle, contBook.createBook);
	router.route("/libro/:libroId").get(authMiddle, contBook.getBookId);
	router.route("/libro/:libroId").patch(authMiddle, contBook.patchBookId);
	router.route("/libro/:libroId").delete(authMiddle, contBook.removeBookId);
	router
		.route("/libro/:addfavorite/:libroId")
		.post(authMiddle, contBook.addFavorite);
};
