require ("./products_data.js"); // only works in node .js makes it more explicit on what we are executing//
const numProducts = 5;
let productNumber = 1;
while(productNumber <= numProducts) {
    console.log(`${productNumber}. ${eval('name' + productNumber)}`);
    productNumber++;
    if(productNumber > numProducts/2) {
        console.log(`That’s enough!`);
        break;
    }
}
console.log(`That's all we have!`)
