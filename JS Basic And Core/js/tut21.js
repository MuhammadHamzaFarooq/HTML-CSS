/*
You have to create a div and inject it into the page which contains a heading 
whenever someone clicks on the div , it should be converted into an editable item.
whenever user clicks away (blurs). save the note into the local storage .
*/

// Garb the main container
let cont = document.querySelector('.container');
let first = document.getElementById('first');

// create a new a element 
let divElement = document.createElement('div');
console.log(cont, first, divElement);

// Give element id , style and class
divElement.id = "elem";
divElement.className = "element2"
divElement.style.border = '2px solid black'

// Add text to that created element 
let text = document.createTextNode("This is my element . click to edit it ");
divElement.appendChild(text);


// insert the element before element id first 
cont.insertBefore(divElement, first);


// Add eventlistner to eventElement
divElement.addEventListener('click', function () {
    let noTextArea = document.getElementsByClassName('textarea').length;
    if (noTextArea == 0) {
        let html = elem.innerHTML;
        divElement.innerHTML = `  <textarea name="" id="textarea" cols="30" rows="10" class="textarea">${html}</textarea>`;
    }
    // listen for the blur event for textarea
    let textarea = document.getElementById("textarea");
    textarea.addEventListener('blur', function () {
        elem.innerHTML = textarea.value;
    })
})