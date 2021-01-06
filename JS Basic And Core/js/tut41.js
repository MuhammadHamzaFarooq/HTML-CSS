console.log("Learn Fetch Api");

//Button with id myBtn 
let myBtn = document.getElementById('myBtn');


// div id content
let content = document.getElementById("content");


function GetData() {
    console.log("started GetData");
    let url = "harry.txt";
    fetch(url).then((response)=>{
        console.log("Inside first then");
         return response.text();
    }).then((data)=>{
        console.log("Inside second then");
       console.log(data); 
    });
}


console.log("Before running GetData");
GetData();
console.log("After running GetData");