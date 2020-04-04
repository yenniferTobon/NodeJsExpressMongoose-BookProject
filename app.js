const express = require("express");
const app = express();
const config = require("./app/configs/config.js");
const mongoose = require("mongoose");
const router = express.Router();
const way = require("./app/routers/indexRouters");
const bodyParser = require("body-parser");
const errorMiddleware = require("./app/middlewares/errorMiddleware");
require("express-async-errors");

//app.get("/", function(request, response) {
//    response.send("Hello Juan!!");
//});

app.use(
	bodyParser.urlencoded({
		extended: true
	})
);

app.use(bodyParser.json());

way(router);
app.use("/api/v1", router); //only requests to /api/v1/* will be sent to our "router"
app.use(errorMiddleware);

const connectionString =
	"mongodb://" + config.IP_BD + ":" + config.PORT_BD + "/" + config.NAME_BD;
mongoose
	.connect(connectionString, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useFindAndModify: true
	})
	.then(
		() => {
			console.log("Database connection [OK]");
		},
		err => {
			console.log("Error during connecting with database");
		}
	);

app.listen(config.PORT_APP, function() {
	console.log("listening by the port " + config.PORT_APP);
});
