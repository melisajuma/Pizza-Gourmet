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
        this.price = 0 + 400;
    } else if (this.size == "Medium") {
        this.price = 0 + 600;
    } else if (this.size == "Large") {
        this.price = 0 + 800;
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

var totalCostOfOrders = [];

$(document).ready(function () {
    $("#submission").submit(function (event) {
        event.preventDefault();
        var size = $("select#Size").val()
        var crust = $("input#crust").val();
        var topping = $("input.topping").val();

    var newPizzaOrder = new order(size, crust, topping);
    totalCostOfOrders.push(newPizzaOrder.price);

    $("#order-cost").show();
    $("#order-cost").append("\t" + "\t" + size);
    $("#order-cost").append("\t" + "\t" + crust);
    $("#order-cost").append("\t" + "\t" + topping);
    $("#final-cost").text("\t" + "\t" + newPizzaOrder.totalCostOfOrders());
     });     
     $("#submitbutton").click(function(){
           location.reload();
        });


});
        

       
