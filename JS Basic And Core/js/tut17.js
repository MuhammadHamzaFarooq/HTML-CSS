document.getElementById('heading').addEventListener("mouseover",function(e){
    console.log("You click the heading ");
    let variable = e.target;
     variable = e.target.className;
     variable = e.target.classList;
    //  variable = e.target.id;
     variable = e.offsetX;
     variable = e.offsetY;
     variable = e.clientX;
     variable = e.clientY;
    console.log(variable);

    // location.href = "https://www.youtube.com";
})