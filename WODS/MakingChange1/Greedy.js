function makeChange(amountInPennies) {
    let quarters = 0;
    let dimes = 0;
    let nickles = 0;
    let pennies = 0;

    //find max number of quarters
    quarters = Math.floor(amountInPennies / 25);

    //updates the amount in pennies after doing quarters
    amountInPennies %= 25;

    //find max number of dimes
    dimes = Math.floor(amountInPennies / 10);

    //updates the amount in pennies after doing dimes
    amountInPennies %= 10;

    //find max number of nickles
    nickles = Math.floor(amountInPennies / 5);

    //updates the amount in pennies after doing nickles
    amountInPennies %= 5;    
    
    //find max number of pennies
    pennies = amountInPennies;

    return {
        'quarters': quarters,
        'dimes': dimes,
        'nickles': nickles,
        'pennies': pennies,
    }
}

//test the function

let amount = 125; // give xxxx to represent $xx.xx there never start with 0 for number 
let change = makeChange(amount);
console.log(`Quarters:`, change.quarters);
console.log(`Dimes:`, change.dimes);
console.log(`Nickels:`, change.nickles);
console.log(`Pennies:`, change.pennies);