const mongoose = require("mongoose");
const Schema = mongoose.Schema; //constructor the mongoose

const BookSchema = new Schema({
	nombre: { type: String, required: true },
	descripcion: { type: String, required: true },
	autor: { type: String, required: false },
	imagen: { type: String, required: false },
	categorias: [{ type: String, required: false }]
});

module.exports = mongoose.model("book", BookSchema);
