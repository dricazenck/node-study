var products = [{name: 'Wine', price: 43.4}, {name: 'Beer', price: 6.5}, {name: 'Juice', price: 4.5}];

var addOrder = function(order) {
    var total = 0;
    order.items.forEach(function (item){
         total += item.subtotal;
    });

    order.total = total;
    order.id=orders.length+1;
    
    orders.push(order);
};

var bodyParser = require('body-parser'), 
    express = require('express'),
    app = express(),
    cors = require('cors'),
    products = products,
    orders = [];

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', function (req, res) {
    res.send('Hello NodeJS');
});

app.get('/products', function (req, res) {
    res.send(products);
});

app.get('/orders', function (req, res) {
    res.send(orders);
});

app.post('/orders', function (req, res) {
    addOrder(req.body);
    res.send(orders);
});

var server = app.listen(3000);

console.log('Server express started %s', server.address().port);