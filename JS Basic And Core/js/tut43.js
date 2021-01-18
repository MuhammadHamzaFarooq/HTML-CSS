console.log("Leran async .await");

// key point 
// async function kay aagay laganay say function ak  prommise return kar ta hay . or .await laganay say ho kam bakcgroun may run hota hay or control flow koi or kam karta hay funciton sya bahar ja kar ho jab kam proa ho ja ta hay to wo dobara .await kay pass ata hay kam kahtam kar kay or wo kam bhi ho cho ka ho ta ha to pher aga ki line execute hoti han


// async function Greet() {
//     console.log("Inside funciton");
//     return "Hello World";
// }



// console.log("Befor calling funciton");
// let val = Greet();
// console.log("After calling funciton");
// console.log(val);
// console.log("last line of JS File");


async function func() {
    console.log("Inside func function");
    const response = await fetch("https://api.github.com/users");
    console.log("Before response");
    const users = await response.json();
    console.log("users resolved");
    return users    
} 


console.log("Befor calling func funciton");
let val1 = func();
console.log("After calling func funciton");
console.log(val1);
val1.then(function (data) {
    console.log(data)
}
    )
console.log("last line of JS File");