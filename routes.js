var handlers = require('./handlers');

module.exports = [{
    method: 'GET',
    path: '/hello',
    handler: function(request, reply) {
	handlers.handleHelloWorld(request, reply);
    }
}];
