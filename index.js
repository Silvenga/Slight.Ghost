var path = require('path');
var ghost = require('ghost');

var config = {
    config: path.join(__dirname, 'config.js')
};

ghost(config).then(function (ghostServer) {
    ghostServer.start();
});
