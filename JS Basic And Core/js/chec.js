console.log("This is check Js");

// creating object for using object literal 
let Obj = {
    name : "Hamza",
     age: 21,
    city: 'karachi',
};
// console.log(Obj);

function myObj(givenName){
 this.name = givenName;
}

myObj.prototype.getName = function(){
  return  this.name ;
}

myObj.prototype.setName = function(givenName){
    this.name = givenName;
}

let Obj1 = new myObj("JavaScript Developer");
// console.log(Obj1);

// 

const proto = {
    slogan : function(){
        return "Hamza is the best";
    },
    changeName : function(givenName){
     this.name = givenName;
    }
}

// This create hamza object
let hamza = Object.create(proto);
hamza.name = "hamza";
hamza.role = "programmer";
hamza.changeName("iot Developer");
// console.log(hamza)

// This also create rafay object but this is old syntax
const rafay = Object.create(proto,{
    name: {value:"java",writable:true},
    role: {value:"Digital Marketer"},
})
// console.log(rafay);




// Employee Constructor 
function Employee(name,salary,exprience){
    this.name = name;
    this.salary = salary;
    this.exprience = exprience;
}

Employee.prototype.slogan = function(){
    return `This company is the best . Regards ${this.name}`;
}

let iotDeveloper = new Employee("Muhammad Hamza Farooq",100000,2);
console.log(iotDeveloper)

// Programmer 
function Programmer(name,salary,exprience,language){
    Employee.call(this,name,salary,exprience);
    this.language = language;    
}
// inherit the prototype 
Programmer.prototype = Object.create(Employee.prototype);

// Manualy set constructor 
Programmer.prototype.constructor = Programmer;
let ziyad = new Programmer("ziyad",12000,12,"python");
console.log(ziyad);




// Fruits  Constructor 
function Fruits(color, smell,tast){
   this.color = color;
   this.smell = smell;
   this.tast = tast;
   this.slogan = function(){
       return "this is the best fruit";
   };
   
}

let  apple = new Fruits('red',"sondhi","sweet");
console.log(apple);

// inherit the prototype 
DryFruits.prototype = Object.create(Fruits.prototype);

// Manualy set constructor 
DryFruits.prototype.constructor = DryFruits;

function DryFruits(color,smell,tast,form){
    Fruits.call(this,color,smell,tast);
    this.form = form;
}

let akhrote  = new DryFruits("brown","none","sweet","solid");
console.log(akhrote);