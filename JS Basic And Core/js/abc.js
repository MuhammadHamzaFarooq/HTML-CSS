/*
You have to create a div and inject it into the page which contains a heading 
whenever someone clicks on the div , it should be converted into an editable item.
whenever user clicks away (blurs). save the note into the local storage .
*/

// Create a div element 
let divElement = document.createElement('div');

// Give id , style , class 
divElement.id = "elem";
divElement.className = "elem";
divElement.setAttribute = "border:2px solid black";

// Grab the element 
let container = document.querySelector('.container');
let first = document.getElementById('first');

// create text
let val = localStorage.getItem('text');
let text;
if (val == null) {
    text = document.createTextNode("This is my content . click to edit it ");
} else {
    text = document.createTextNode(val);

}
divElement.appendChild(text);

container.insertBefore(divElement, first);

divElement.addEventListener('click', function () {
    let textareaNo = document.getElementsByClassName('textarea').length;
    if (textareaNo == 0) {
        let html = elem.innerHTML;
        divElement.innerHTML = `<textarea name="" id="textarea" class="textarea" cols="30" rows="10">${html}</textarea>`;
    }
    // listen for the blur event for textarea
    let textarea = document.getElementById("textarea");
    textarea.addEventListener('blur', function () {
        elem.innerHTML = textarea.value;
        localStorage.setItem("text", textarea.value);
    })

})