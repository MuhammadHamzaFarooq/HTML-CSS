// let element = document.createElement('li');



// Add a Class name to li element
// element.className= 'mylist';
// element.id= 'myId';
// element.setAttribute('title','mytitle');
// element.innerText = 'hello this is created by hamza'
// console.log(element);
// let text = document.createTextNode(' I am a text node');
// element.appendChild(text);

// let  ul = document.querySelector('ul.this');
// ul.appendChild(element);
// console.log(ul);


// let elem2 = document.createElement('h1');
// elem2.id = 'elem2';
// elem2.className = 'elem2';
// let tnode = document.createTextNode("This is a created node for elem2 ");
// elem2.appendChild(tnode); 

// element.replaceWith(elem2)


// let myul = document.getElementById('myUl')
// myul.replaceChild(element,document.getElementById('item-2'));

// myul.removeChild(document.getElementById('item-4'));



// let pr = elem2.getAttribute('id');
// pr = elem2.hasAttribute('id'); //return ture and false
// console.log(pr,elem2);
// pr = elem2.removeAttribute('id'); //remvoe the attribute
// console.log(pr,elem2);


// quick quize

// create a heading element with text  as "Go to CodeWithHarry" and create an a tag outside it wiht href = "http://www.codeWithHarry.com" 

let heading = document.createElement('h1');
heading.className = 'h1heading';
heading.id = 'h1heading';
heading.innerHTML = "<h1>Go to CodeWithHarry<h1/>";
document.body.appendChild(heading)
console.log(heading)


let tagA = document.createElement('a');
tagA.href = "http://www.codeWithHarry.com";
tagA.innerHTML = "<a>Go to CodeWithHarry <a/>"
document.body.appendChild(tagA);
console.log(tagA);
