console.log("Welcome to tutorial 28");


// object literal
let objs = {
    name: "hamza",
    age: 26,
    postion : "Web And IOT Developer",
}

// console.log(objs)



function obj(givenName) {
    this.name = givenName;
}




obj.prototype.getName = function () {
   return this.name = givenName;
}
console.log(obj.prototype)

obj.prototype.setName = function (newName) {
    this.name = newName
}





let obj1 = new obj('sufyan');
// console.log(obj1)

