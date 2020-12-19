console.log("Welcome to tutorial 27");

// creating object leteral 
// let car = {
//     name : "Honda Civic",
//     color: "black",
//     model: "2020",
//     speed : "300",
//     run   : function () {
//         console.log(`${name} car is running speed is ${speed}`);
//     }
// }
// console.log(car);



// We have already seen constructor like this 
function GeneralCar(givenName , givenSpped) {
    this.name =givenName;
    this.topspeed = givenSpped;
    this.run = function () {
        console.log(`${name} is runing`);
    }

    this.analyz = function () {
        console.log(`This is car is slower than ${200 - this.topspeed} KM/H than Mercedes`);
    }
}

car1 = new GeneralCar('Nissan',2000);
console.log(car1);

car2 = new GeneralCar("cultas",100);
console.log(car2)


car2.analyz();