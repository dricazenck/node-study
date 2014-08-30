var createProduct = function (id, name, price, description) {
    return {
        id : id,
        description : description,
        name: name,
        price: price
    }
};

var createOrder = function (id, table, items, status, date) {
    var getTotal =function () {
        var total = 0;
        items.forEach(function (item){
             total += item.subtotal;
        });
        return total;
    };
    return {
        id : id ,
        table : table,
        date : date,
        items : items,
        status : status,
        getTotal : getTotal
    };
};

var createItems = function(product, quantity) { 
    var subtotal = product.price *  quantity;
    return {
        product : product,
        quantity: quantity, 
        subtotal: subtotal
    };
};

//samples of data to products
var products = [
    createProduct(1, "Frozen Marguarita", 18.5, 'A'), 
    createProduct(2, "Bloody Mary", 23, 'B'), 
    createProduct(3, "Sex on The Beach", 25.00, 'C'), 
    createProduct(4, "Marguarita", 15.35, 'C'), 
    createProduct(5, "Cosmopolitan", 21.50, 'D')
];

//samples of data to orders
var orders = [ 
    createOrder(1, "24", [createItems(products[0],1), createItems(products[4],2)], 'Ok', new Date(2014,4,27,08,30,10)), 
    createOrder(2, "10", [createItems(products[1],2)], 'Cancel', new Date(2014,6,27,12,10,44)), 
    createOrder(3, "02", [createItems(products[2], 1), createItems(products[3], 1)],'Ok', new Date(2014,4,28,20,30,10))
];

module.exports.products = products;
module.exports.orders = orders;