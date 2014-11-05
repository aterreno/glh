var Hapi = require('hapi');
var routes = require('./routes');


var config = {};

// Create a server with a host and port
var server = new Hapi.Server('localhost', 3000, config);

server.route(routes);

// Start the server
server.start();

module.exports = server;
