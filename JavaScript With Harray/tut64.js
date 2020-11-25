const fs = require("fs");
let text = fs.readFileSync("hello.txt", "utf-8");
text = text.replace("Rust", "IOT");
console.log("The content of the file is " + text);
// console.log(text);

console.log("Creating a new file....");
fs.writeFileSync("iot.txt", text);