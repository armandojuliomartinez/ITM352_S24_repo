let attributes  =  "Armando;20;20.5;-19.5" ;
let pieces = attributes.split(';');
/*
for(let part of pieces) { 
    console.log(`${part} is a ${typeof part}`);}
*/
// join parts with , also the separator is optional and the default separator is a coma
console.log(pieces.join(','))
