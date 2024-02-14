require ("./products_data.js"); // only works in node .js makes it more explicit on what we are executing//
const numProducts = 5;
let productNumber = 1;
while(productNumber < numProducts/2) {
    console.log(`${productNumber}. ${eval('name' + productNumber)}`);
    productNumber++;
}
console.log(`That's all we have!`)
