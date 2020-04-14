const contBook = require("../controllers/bookControllers");
const authMiddle = require("../middlewares/authMiddleware");

module.exports = router => {
	router.route("/book").get(contBook.getAllBooks);
	router.route("/book").post(authMiddle, contBook.createBook);
	router.route("/book/:bookId").get(contBook.getBookId);
	router.route("/book/:bokId").patch(authMiddle, contBook.patchBookId);
	router.route("/book/:removeId").delete(authMiddle, contBook.removeBookId);
};
