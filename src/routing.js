'use strict'
module.exports = function(server) {
    console.log('server', server);

    function getMethod(req, res, next) {
    	console.log('params ',  req.params);
        res.send('hello', req.params['name']);
        return next();
    }

    server.get('/hello/:name', getMethod);
}
