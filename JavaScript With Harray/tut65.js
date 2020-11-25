// Synchronous or Blocking
// -line by line exection

// Asynchronous or non-blocking
// -line by line exection not guaranted
// Callbacks will fire

const fs = require("fs");
fs.readFile("hello.txt", "utf-8", (err, data) => {
    console.log(data);
});

console.log("This is a message");