let a = document;
a= document.all;
a = document.body
a = document.forms

Array.from(a).forEach(function(element){  // Array.fom(a) ka matlab hay kay a ki madad say banalo ak array pher is ko iterate karlo foreach ko use kartay hoay.
    console.log(element);
})

a =document.link;
console.log(a);



// Q 1 use the document.images and documnt.script and print the list of images and scripts  on an html page