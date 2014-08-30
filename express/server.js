var express = require('express'), 
    app = express();

app.get('/', function (req, res) {
    res.send('Hello NodeJS with express');
});

app.get('/products', function (req, res) {
    res.send([{name: 'Wine', price: 43.4}, {name: 'Beer', price: 6.5}, {name: 'Juice', price: 4.5}]);
});

var server = app.listen(3000);

console.log('Server express started %s', server.address().port);