var path = require('path');
var ghost = require('ghost');

var config = {
    config: path.join(__dirname, 'config.js')
};

process.env.NODE_ENV = 'production';

ghost(config).then(function (ghostServer) {
    ghostServer.start();
});
