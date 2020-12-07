
// Exercise1
// you have to create a variable  which is a string containing the text which is a link you are interested in.

// you have to fetch all the links form a given page which contain this text 
let text = "youtube"
// console.log(text);

let a = document.links;
Array.from(a).forEach(element => {
     if(element.href.includes(text)){
         console.log(element);
     }
     else{
         console.log("not includes with this text");
     }
});