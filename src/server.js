'use strict'

var restify = require("restify");

module.export = function() {
    var server = restify.createServer({
        name: 'myapp',
        version: '1.0.0'
    });

    server.use(restify.acceptParser(server.acceptable));
    server.use(restify.queryParser());
    server.use(restify.bodyParser());

    return server;
}
