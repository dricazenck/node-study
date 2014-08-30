var http = require('http');
var fs =  require('fs');
var qs = require('querystring')

var models = require('./models.js');


var server = http.createServer(function (req, res) {    
    var result = 'Hello NodeJs';

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'PUT,GET,POST,DELETE,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    res.writeHead(200, {'Content-Type':'text/plain'});


    if (req.method === 'GET') {

        if (req.url === '/products') {
            result = JSON.stringify(models.products);

        } else if (req.url === '/orders') {
            
            result = JSON.stringify(models.orders);
        }

        res.end(result);

    } else {
         console.log("Post");        
    }


}).listen(8000, 'localhost');

console.log("server is running at http://localhost:8000");