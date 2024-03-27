function getDayOfWeek(day, month, year) {
    let monthKey = {
        'January': 0,
        'February': 3,
        'March': 2,
        'April': 5,
        'May': 0,
        'June': 3,
        'July': 5,
        'August': 1,
        'September': 4,
        'October': 6,
        'November': 2,
        'December': 4,
    };

    let dayOfWeekNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let step1;
    if (month == 'January' || month == 'February') {
        step1 = year - 1;
    } else {
        step1 = year;
    };
    
    let step2= (parseInt(step1/4)+step1)-(parseInt(step1/100))+(parseInt(step1/400))+day;

    let step6 = step2+monthKey[month];

    return dayOfWeekNames [step6%7];

}

//test with brithdate (MM/DD/YYYY)
let day = 13;
let month = 'March';
let year = 2024;

let dayOfWeek= getDayOfWeek(day, month, year);
console.log(`The day of the week for ${month}/${day}/${year} is ${dayOfWeek}`)