const authentication = require("./autheRouters.js");
const userAll = require("./userRouters.js");

module.exports = router => {
	authentication(router);
	userAll(router);
};

//module.exports = router => {
//    authentication(router) = require('./autheRouters.js');
//};
