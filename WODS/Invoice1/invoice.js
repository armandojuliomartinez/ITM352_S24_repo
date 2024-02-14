/* this creates and displays a sales invoice form product sales data */

 // Product 1
 let item1 = 'Gillette Sensor 3 Razor';
 let quantity1 = 2;
 let price1 = 1.23;

// Product 2
let item2 = 'Barbasol Shaving Cream';
let quantity2 = 3;
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

// compute extended prices (ep)

let ep1=quantity1*price1;
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