function makeNumber() {
    let onlyNumber = '';
    for (let i = 0; i < arguments.length; i++) {
        let num = '';        
        num = arguments[i];     
        for (let n = 0; n < num.length; n++) {           
            if (isFinite(num.charAt(n))){
                onlyNumber += num.charAt(n);                              
            }            
        }        
    } 
    return onlyNumber; 
}

function countNumbers(a) {
    let sum = {};
    makeNumber(a).split('').forEach(function (arg) {
                if (sum[arg] !== undefined) {
                    ++sum[arg];
                } else {
                    sum[arg] = 1;
                }
            }); return sum;
}

console.log(countNumbers('df545d4fh654dfh65df1188111122222h5d4f'));

