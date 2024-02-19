require ("./products_data.js"); // only works in node .js makes it more explicit on what we are executing//
for(let i=1; eval("typeof name"+ i) != 'undefined'; i++) {
    console.log(`${i}. ${eval('name' + i)}`);

}
console.log(`That's all we have!`)
