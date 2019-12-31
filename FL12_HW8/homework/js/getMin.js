function getMin () {
    let a = arguments[0];
    for (let i = 1; i < arguments.length; i++) {
        if (a > arguments[i]){
            a = arguments[i]
        }
    }
    return a;
}

console.log(getMin(15,52,5,9));