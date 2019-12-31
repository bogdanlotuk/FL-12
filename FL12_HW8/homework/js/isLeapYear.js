function isLeapYear(arg) {
    let date = (new Date(arg));
    let year = date.getFullYear();
    if (isNaN(date)) {
        return 'Invalid Date';
    } else {
        if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
           return (year + ' is a leap year');
        } else {
           return (year + ' is not a leap year');
        }          
    }
}

console.log(isLeapYear(1213131313));
 
