require ("./products_data.js"); // only works in node .js makes it more explicit on what we are executing//
const numProducts = 5;
let productNumber = 0;
while(++productNumber <= numProducts) {

    if(
        productNumber > numProducts*.25 && productNumber < numProducts*.75
        ) 
            {
                console.log(`${eval('name' + productNumber)} is sold out!`);
                continue;
                
            }
    console.log(`${productNumber}. ${eval('name' + productNumber)}`);
}