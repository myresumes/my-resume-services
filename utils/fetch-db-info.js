'use strict';

var mysql = require('mysql');
var Promise = require('bluebird');
var _ = require('lodash');
// var logger = require('bunyan').createLogger({
//     name: 'dbconfigurer',
//     level: 'info'
//});
var fs = Promise.promisifyAll(require('fs'));
//var _ = require('lodash');
//var config = require('config');
//var dbName = 'wams';
var connection = mysql.createConnection({
    database: 'test',
    user: 'root',
    host: 'localhost'
});
var obj = {},
    fields = [];

connection.connect(function() {
    console.info('Connected');
});


connection.query('show tables', (err, resp) => {
    var entities = {};
    console.log(resp);
    var allTables = _.map(resp, 'Tables_in_test');
    console.log(allTables);
    _.forEach(allTables, (table) => {
        entities[table] = _.camelCase(table);
        console.log(entities);
    });
    fs.lstatAsync('output').then((success) => {
        //console.info('Test : ', success);
        fs.writeFile('./output/test-tables.json', JSON.stringify(entities), function(err) {
            if (err) {
                return console.info(err);
            }
            console.info('Database Tables have been written to the external file!');
            //resolve();
        });
    }).catch((error) => {
        fs.mkdirAsync('./output').then((success) => {
            fs.writeFile('./output/test-tables.json', JSON.stringify(entities), function(err) {
                if (err) {
                    return console.info(err);
                }
                console.info('Database Tables have been written to the external file!');
                //resolve();
            });
        });
        //console.log(error);
    });
    // fs.writeFile('output/test-tables.json', JSON.stringify(entities), function(err) {
    //     if (err) {
    //         return console.info(err);
    //     }
    //     console.info('Database Tables have been written to the external file!');
    //     //resolve();
    // });

});
