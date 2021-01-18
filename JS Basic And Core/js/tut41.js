console.log("Learn Fetch Api");

//Button with id myBtn 
let myBtn = document.getElementById('myBtn');


// div id content
let content = document.getElementById("content");


// function GetData() {
//     console.log("started GetData");
//     let url = "harry.txt";
//     fetch(url).then((response)=>{
//         console.log("Inside first then");
//          return response.text();
//          console.log(response)
//     }).then((data)=>{
//         console.log("Inside second then");
//        console.log(data); 
//     });
// }


function GetData() {
    console.log("started GetData");
    let url = "https://api.github.com/users";
    fetch(url).then((response)=>{
        console.log("Inside first then");
         return response.json();
         console.log(response)
    }).then((data)=>{
        console.log("Inside second then");
       console.log(data); 
    });
}
function posttData() {
    let url = "	http://dummy.restapiexample.com/api/v1/create";
    let data = '{"name":"kdfakfha","salary":"123","age":"23"}';
    let params = {
        method : 'POST',
        headers : {
            'Content-Type' : 'application/json',
           
        },
        body: data,
    }
    fetch(url,params).then((response)=>{
         return response.json();
         console.log(response)
    }).then((data)=>{
       console.log(data); 
    });
}


// console.log("Before running GetData");
// GetData();
// console.log("After running GetData");


posttData();
