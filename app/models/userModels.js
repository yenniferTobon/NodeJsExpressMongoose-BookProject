const mongoose = require("mongoose");
const Schema = mongoose.Schema; //constructor the mongoose

const UserSchema = new Schema({
	name: { type: String, required: true },
	username: { type: String, required: true },
	password: { type: String, required: true },
	favoritos: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: "book"
		}
	]
});

module.exports = mongoose.model("user", UserSchema); //mongoose model method to export it
