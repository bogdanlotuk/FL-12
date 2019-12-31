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

console.log(makeNumber('df545d4212154fh654dfh65dfh5d4f'));