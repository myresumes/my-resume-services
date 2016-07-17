// module.exports = function() {
//     //var fetchDir = Promise.promisifyAll(fs.readdir);
//     var fs = Promise.promisifyAll(require("fs"));

//     function process_request(req, res) {
//         console.log("INCOMING REQUEST: " + req.method + " " + req.url);
//         res.writeHead(200, { "Content-Type": "application/json" });
//         fs.readdir('./albums').then(function(resp) {
//             console.log(resp);
//         });
//         res.end(JSON.stringify({ value: 1 }));
//         // fetchDir('./albums').then(function(resp) {
//         //         res.end(JSON.stringify({ value: 1 }));
//         //     })
//         //     .error(function(error) {
//         //         res.end(JSON.stringify({ error: 'Unalbe to fetch albums' }));
//         //     })

//     }

//     function fetchlistofAlbums(callback) {
//         fs.readdir('./albums', callback);
//     }

//     var server = http.createServer(process_request);
//     return server;

//     //return process_request();
// }


// // var Promise = require('bluebird');
// // var readDirAsync = Promise.promisify(fs.readdir);
// // readDirAsync('./albums').then((resp) => {

// // }).error((err)=> {

// // });


