// Element seclector 
// 1 single element selector 

let element = document.getElementById('child-3');
// element = element.className;
// element = element.childNodes;
// element = element.parentNode;
element.style.color = 'red';
element.innerText = "Hamza is a good boy ";
element.innerHTML = "<b>Hamza is a good boy</b> ";

// console.log(element.innerHTML);

// let sel  = document.querySelector('.container');
sel  = document.querySelector('h1');
// console.log(sel)




// 2 mulit element selector
let elems = document.getElementsByClassName('child');
elems = document.getElementsByClassName('container');
elems = document.getElementsByTagName('div');


// console.log(elems[0]);
console.log(elems);
