let a = parseInt(prompt('Input a'));
let b = parseInt(prompt('Input b'));
let c = parseInt(prompt('Input c'));
let n4 = 4;
let n2 = 2;
if (a === 0) {
    console.log('Invalid input data');
} else {
    if (!isNaN(a) && !isNaN(b) && !isNaN(c)) {
        let d = (b*b - n4*a*c)/n2*a;
        if (d === 0) {
            let x12 = -b/n2*a;
            console.log('x = ' + Math.round(x12));
        } else if (d > 0) {
            let x1 = (-b+Math.sqrt(d))/n2*a;
            let x2 = (-b-Math.sqrt(d))/n2*a;
            console.log('x1=' + Math.round(x1) + ' and ' + 'x2=' + Math.round(x2));
        } else if (d < 0) {				
            console.log('no solution');
        } 
    } else {
        console.log('Invalid input data');
    }    
}