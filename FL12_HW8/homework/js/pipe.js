function addOne(x) {
  return x + 1;
}

function pipe() {
    let arrArg = [...arguments];
    let Num = arrArg.shift();
    for (let i = 0; i < arrArg.length; i++){
        Num = addOne(Num);
    }
    return Num;
}

console.log(pipe(1, addOne));
console.log(pipe(1, addOne, addOne));