const authentication = require("./autheRouters.js");
const userAll = require("./userRouters.js");
const libroAll = require("./bookRouters");

module.exports = router => {
	authentication(router);
	userAll(router);
	libroAll(router);
};

//module.exports = router => {
//    authentication(router) = require('./autheRouters.js');
//};
