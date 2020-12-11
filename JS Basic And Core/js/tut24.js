console.log("Welcome to tutorial 24");
let date = new Date();
console.log(typeof date);

let otherdate = new Date('7-19-1999 05:54:08');
otherdate = new Date('07/19/1999');
// console.log(otherdate)
let a = otherdate.getDate();
a = otherdate.getDay();
a = otherdate.getMinutes();
a = otherdate.getHours();
a = otherdate.getMonth();
a = otherdate.getMilliseconds();
a = otherdate.getTime();
a = otherdate.setDate(1);
a = otherdate.setMonth(1);
a = otherdate.setFullYear(2029);
a = otherdate.setHours(2029);
a = otherdate.setMinutes(2029);
a = otherdate.setSeconds(2029);


console.log(otherdate)

console.log(a);