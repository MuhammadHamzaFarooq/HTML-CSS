let btn = document.getElementById('btn');
btn.addEventListener('click',func1);
btn.addEventListener('dblclick',func2);
btn.addEventListener('mousedown',func3);
function func1(e){
 console.log(e);
 e.preventDefault(); // is fuction ko call karnay say form sumbit nahi ho ga
}
function func2(e){
 console.log("Thanks it a double click"+e);
 e.preventDefault(); // is fuction ko call karnay say form sumbit nahi ho ga
}
function func3(e){
 console.log("ITs a mouse down"+e);
 e.preventDefault(); // is fuction ko call karnay say form sumbit nahi ho ga
}


document.querySelector(".no").addEventListener("mouseenter",function(e){
    console.log("you entered no")
})

document.querySelector(".no").addEventListener("mouseleave",function(e){
    console.log("you exited no")
})
document.querySelector(".container").addEventListener("mousemove",function(e){
    console.log(e.offsetX,e.offsetY);
    document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, ${e.offsetX+e.offsetY})`
    console.log("you tragger mouse event ");
})