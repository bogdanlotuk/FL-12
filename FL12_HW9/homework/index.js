let zero = 0;
let one = 1;
let two = 2;
let three = 3;
let five = 5;
let seven = 7;
let eight = 8;
let thirty = 30;
let year2019 = 2019;


function convert () {
    let result = [];//       
    for (let i = zero; i < arguments.length; i++) {         
        if (typeof arguments[i] === 'string'){
            result[i] = parseInt(arguments[i]);            
        } else {
            result[i] = String(arguments[i]);            
        } 
    } 
    return result;    
}
console.log(convert('1', two, three, '4'));


function executeforEach(arr, callback) {
    for (let i = zero; i < arr.length; i++){
        callback(arr[i]);
    }
}


function mapArray(arr, callback) {
  let convertedArray = [];
  executeforEach(arr, function(el) {
    let num = parseInt(el);
  if (num !== null) {
    convertedArray.push(callback(num));
  }
});
    return convertedArray;
}


function filterArray(arr, callback) {
  let convertedArray = [];  
  executeforEach(arr, function(el) {
    if (callback(el)){
      convertedArray.push(el);
    }
}); 
  return convertedArray;
}

console.log(filterArray([two, five, eight], function(el){ 
  return el % two === zero; 
}));


function flipOver (str){
  let FlipString = '';
  for(let i = str.length - one; i >= zero; i--){    
    FlipString += str[i];
  }
  return FlipString;
}

console.log(flipOver('hey world'));


function makeListFromRange (arr) {   
  if (arr.length > two || arr.length === zero) { 
    return []; 
  } 
   
  let start = arr[zero]; 
  let end = arr[one]; 
 
  if (arr[0] > arr[1]) { 
    start = arr[1]; 
    end = arr[0]; 
  } 
   
  let arrFinish = []; 
 
  for (let i = start; i <= end; i++){     
    arrFinish.push(i); 
  } 
 
  return arrFinish; 
} 
 
console.log(makeListFromRange([two, seven]));


const actors = [
  { name: 'tommy', age: 36 },
  { name: 'lee', age: 28 }
];

function getArrayOfKeys (objects, key) {
  let result = [];
  executeforEach(objects, obj => result.push(obj[key]));
  return result;
}

console.log(getArrayOfKeys(actors, 'name'));


let a58 = 58;
let a14 = 14;
let a48 = 48;
let a31 = 31;
let a29 = 29;

function substitute(arg) {
  let max = 30;
  return mapArray(arg, function(elem){
    elem = elem < max ? '*' : elem;
    return elem;
  });
}

console.log(substitute([a58, a14, a48, two, a31, a29]));


const date = new Date(year2019, zero, two);
function getPastDay(date, countForDays) {
  const milli = 86400000; 
  return new Date(date.getTime() - countForDays * milli).getDate();
}

console.log(getPastDay(date, one)); 



function formatDate(dates) {
  let ten = 10;
  let year = dates.getFullYear(),
  months = dates.getMonth() + 1,
  days = dates.getDate(),
  hours = dates.getHours() < ten ? `0${dates.getHours()}` : dates.getHours(),
  minutes = dates.getMinutes() < ten ? `0${dates.getMinutes()}` : dates.getMinutes();
return `${year}/${months}/${days} ${hours}:${minutes}`;
}

console.log(formatDate(new Date()));