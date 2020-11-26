console.log("This is mode.js");

function average(arr) {
    let sum = 0;
    arr.forEach(element => {
        sum += element;
    });
    return sum / arr.length;
}
module.exports = {
    avg:average,
    name: "Rust Developr",
    
};