let cont = document.querySelector('.no');
cont = document.querySelector('.container');
console.log(cont.childNodes);
console.log(cont.children);

let nodeName = cont.childNodes[1].nodeName;
console.log(nodeName);
let nodeType = cont.childNodes[1].nodeType;
console.log(nodeType);


// Node List 
// 1. element
// 2. attribute
// 3. Text Node
// 8. comment 
// 10. docType



let container = document.querySelector('.container');
console.log(container.children[0].children[0].children);

console.log(container.firstChild);
console.log(container.firstElementChild);

console.log(container.lastChild);
console.log(container.lastElementChild);
console.log(container.childElementCount);


console.log(container.firstElementChild.parentNode);
console.log(container.firstElementChild.nextSibling);
console.log(container.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling);

