function checkIt(item, index) {
    console.log(`part ${index} is ${(isNonNegInt(item)?'a':'not a')} quantity`);
    }
    
    
let attributes = "Armando;20;20.5;-19.5";
let pieces = attributes.split(';');
    /*
    for(let part of pieces) {
        console.log(`${part} is a ${type of part}`);
    }
    */
    // join parts with ,
console.log(pieces.join());
function isNonNegInt (q) {
    errors = []; // assume no errors at first
    if(Number(q) != q) errors.push('Not a number!'); // Check if string is a number value
    if(q < 0) errors.push('Negative value!'); // Check if it is non-negative
    if(parseInt(q) != q) errors.push('Not an integer!'); // Check that it is an integer
        
    return (errors.length == 0);
    }
    
pieces.forEach(checkIt);