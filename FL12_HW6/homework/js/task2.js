let a = parseInt(prompt('Input a'));
let b = parseInt(prompt('Input b'));
let c = parseInt(prompt('Input c'));
if (!isNaN(a) && !isNaN(b) && !isNaN(c)) {  
    if (a === 0 || b === 0 || c === 0) {
    alert('A triangle must have 3 sides with a positive definite length');
    } else if (c >= a + b || b >= a + c || a >= b + c ) {
    alert('Triangle doesn\'t exist');
    console.log('Triangle doesn\'t exist');
    } else if (a === b && b === c && c === a) {
    console.log('Equilateral triangle');
    } else if (a === b || a === c || b === c) {
    console.log('Isosceles triangle');
    } else {
      console.log('Scalene triangle');
    }
} else{ 
    alert('input values should be ONLY numbers');
} 