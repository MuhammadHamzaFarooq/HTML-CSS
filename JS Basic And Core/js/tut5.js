// type converison
let myVar = 34;
myVar = String(myVar)
// console.log(myVar);

let booleanVar  = true;


let date =  new Date();
let date1 = String( new Date());
// console.log( typeof date);
// console.log( typeof date1);


let arr = [2,3,45,67,4]  ;
// console.log(arr.length, (typeof arr));

let i = 8;
i = i.toString();
// console.log(i);

let str = Number("345");
str = Number("34d5");
str = Number(true);
str = Number([1,2,34]);

console.log( str);


let number = parseFloat("34.5589");
console.log(number,(typeof number));
console.log(number.toFixed(39),(typeof number));

// Type coercion
let mystr = "34";
let mynum = 33;
console.log(mystr+mynum);