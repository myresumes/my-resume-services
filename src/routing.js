'use strict'
module.exports = function(server, entity) {

    function getMethod(req, res, next) {
        console.log('params ', req.params);
        res.send('hello', req.params['name']);
        return next();
    }

    server.get('api/' + entity, getMethod);
    
}
