var restify = require('restify');
var Sequelize = require('sequelize');
var sequelize = new Sequelize('test', 'root', null);
var db = {};
var server = restify.createServer({
    name: 'myapp',
    version: '1.0.0'
});
server.use(restify.acceptParser(server.acceptable));
server.use(restify.queryParser());
server.use(restify.bodyParser());

// server.get('/echo/:name', function (req, res, next) {
//   res.send(req.params);
//   return next();
// });

server.listen(8080, function() {
    console.log('%s listening at %s', server.name, server.url);
});
