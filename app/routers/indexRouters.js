const authentication = require('./autheRouters.js');

module.exports = router => {
    authentication(router);
};
