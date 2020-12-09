// Add key value pair inside local storage
window.localStorage.setItem('name', "hamza");
window.localStorage.setItem('name1', "sufyan");

let fruits = ["apple ", "orange ", "banana", "graps"];

window.localStorage.setItem('fruits', JSON.stringify(fruits));

JSON.parse(localStorage.getItem('fruits'));



// Clear a particular key-value pair in localstroage
localStorage.removeItem('name1');


// Retrive an form local stroage
let name = localStorage.getItem('name');
console.log(name);
// localStorage.clear(); // clear the whole local storage

sessionStorage.setItem("sectionName", "ali");
sessionStorage.setItem("sectionName1", "rafay");