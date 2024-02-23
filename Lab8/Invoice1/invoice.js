/* this creates and displays a sales invoice form product sales data */

//product array
let product_quantities = [2,3,4,1,4];

 // Product 1
let product1 = {
    'item_name': 'Gillete Sensor 3 Razor',
    'price': '1.23',
    'quantity': product_quantities[0]
};


//the comments below were used for exercise 1
// product1.quantity = 0;
// product1["SKU#"]=1234;

// delete product1["SKU#"];

//end of exercise 1


// Product 2
let item2 = 'Barbasol Shaving Cream';
let quantity2 = product_quantities[1];
let price2 = 2.64;

// Product 3
let item3 = 'Boquete of Roses';
let quantity3 = 4;
let price3 = 12.45;

// Product 4
let item4 = 'Nautica Cologne';
let quantity4 = 1;
let price4 = 6.23;

// Product 5
let item5 = 'Box of Chocolate';
let quantity5 = 4;
let price5 = 15.20;

// compute extended prices = ep

let ep1=product1.quantity*product1["price"];
let ep2=quantity2*price2;
let ep3=quantity3*price3;
let ep4=quantity4*price4;
let ep5=quantity5*price5;

//computes sub-total

let subtotal = ep1+ep2+ep3+ep4+ep5;

//computes tax
let tax_rate = 0.0575;
let tax_at = tax_rate*100 + '%';
let tax = subtotal * tax_rate;

//compute grand total

let grand_total = tax + subtotal;