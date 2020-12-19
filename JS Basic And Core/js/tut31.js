console.log("Welcome to tutorial 31 And Studying for OOP Concept in JS For ES6 Classes");

// Creating a class 
class Employee{
    constructor(name,age,department,salary,city,positon,exprience) {
        this.name = name;
        this.age =age;
        this.department = department ;
        this.salary = salary;
        this.city = city ;
        this.positon = positon;
        this.exprience =exprience ;
    }
    greet(){
       return `I am ${this.name} and this company is the best!`;
    }

    joiningYear(){
        return 2020-this.exprience;
    }

    static add(num1 , num2){
        return (num1+num2);
    }
}

// console.log(Employee.add(22,33))
// let hamza = new Employee("Muhammad Hamza Farooq",21,"CS",100000,"karachi","Web Developer",10);
// console.log(hamza)



class Programmer   extends Employee{
    constructor(name,age,department,salary,city,positon,exprience ,language,github) {
         super(name,age,department,salary,city,positon,exprience) // Super keyword parent class kay constructor ko call karta hay
         this.language = language;
         this.github = github;
    }
    favoriateLanguage(){
        if(this.language == "rust"){
         return   `My Favoriate Language is ${this.language}`;
        }
        else{
         return `Favoriate Language is JavaSript`;
            
        }
    }

    static multiply(a,b){
        return a*b;
    }
}



let ziyad = new Programmer("Mirza Ziyad ",22,100000,"karachi","web developer",5,"javasicrpt")
console.log(ziyad);
console.log(ziyad);
console.log(ziyad.favoriateLanguage());
console.log(Programmer.multiply(10,22));


