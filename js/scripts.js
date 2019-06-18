var order = function (size, crust, topping) {
    this.size = size;
    this.crust = crust;
    this.topping = topping;
    this.price = 0;
}
var size = ["Small", "Medium", "Large"];
var crust = ["Glutten-free", "Stuffed", "Crispy"];
var topping = ["Chicken", "Vegetables", "Beef"];

//calculating the price of an order depending on customer specification
order.prototype.pizzaCost = function () {
    if (this.size == "Small") {
        this.price += 400;
    } else if (this.size == "Medium") {
        this.price += 600;
    } else if (this.size == "Large") {
        this.price += 800;
    }
    if (this.crust == "Glutten-free") {
        this.price += 50;
    } else if (this.crust == "Stuffed") {
        this.price += 150;
    } else if (this.crust == "Crispy") {
        this.price += 200;
    }
    if (this.topping == "Chicken") {
        this.price += 300;
    } else if (this.topping == "Vegetables") {
        this.price += 100;
    } else if (this.topping == "Beef") {
        this.price += 200;
    }
    return this.price;
}


order.prototype.totalCostOfOrders = function () {
    var shoppingCartTotal = 0;
    for (var shoppingCartTotal = 0; shoppingCartTotal < order.length; shoppingCartTotal++) {
        shoppingCartTotal += totalOrderPrice[order];
    }
    return shoppingCartTotal;

}

var totalCostOfOrders = [];

$(document).ready(function () {
    $("form#submission").submit(function (event) {
        event.preventDefault();
        var size = $("select#Size").val()
        var crust = $("select#Crust").val();
        var topping = $("select#topping").val();
        var newPizzaOrder = new order(size, crust, topping);
        newPizzaOrder.pizzaCost();
        totalCostOfOrders.push(newPizzaOrder.price);

        $("#order-cost").show();
        $("#pizzaSize").append("\t" + "\t" + size);
        $("#pizzaCrust").append("\t" + "\t" + crust);
        $("#pizzaTopping").append("\t" + "\t" + topping);
        $("#order-cost").append("\t" + "\t" + newPizzaOrder.totalCostOfOrders());
    });
    $("").click(function () {
        location.reload();
    });


});



