// var restify = require('restify');

// var server = restify.createServer({
//   name: 'myapp',
//   version: '1.0.0'
// });
// server.use(restify.acceptParser(server.acceptable));
// server.use(restify.queryParser());
// server.use(restify.bodyParser());

// // server.get('/echo/:name', function (req, res, next) {
// //   res.send(req.params);
// //   return next();
// // });

// server.listen(8080, function () {
//   console.log('%s listening at %s', server.name, server.url);
// });

// var server = require('./server')().then(() => {
//     console.log('Server stared !');
// });
var server = require('./server');
var routing = require('./routing');
var Promise = require('bluebird');
var promise = server();
var _ = require('lodash');
var fs = Promise.promisifyAll(require("fs"));
console.log('promise = ', promise);
promise.then((srv) => {
    //console.log('server started!!!!', srv);
    return generateRoutes(srv);
}).then((routes) => {
    console.log('routes ', routes);
});


function generateRoutes(srv) {
    return fs.readFileAsync('./db-structure.json').then((fData) => {
        //console.log(JSON.parse(fData));
        return JSON.parse(fData);
    });
    // var jObj = JSON.parse(fs.readFileSync('./db-structure.json'));
    // if (_.has(jObj, 'entities')) {
    //     console.log('object ', jObj.entities);
    //     //routing(srv, jObj.entities);
    // }
    // console.log('Reading files');
    // console.log(JSON.parse(entities));
}
//server;
