console.log("Learn promise Function");


// Pretened that this is response coming from the server
let students = [
    { name: "Muhammad Hamza Farooq", subject: "JavaScript" },
    { name: "Ziyad", subject: "Machine Learning" },
];

function enrollStudent(student, callback) {
    setTimeout(function(){
        students.push(student);
        console.log("Students has been enrolled");
        callback();
    },1000);
}

function getStudents() { 
    setTimeout(function(){
       let str = "";
       students.forEach(function(student) {
           str += `<li>${student.name}</li>`
       });

       document.getElementById('students').innerHTML = str;
       console.log("Students has been fetched");

    },5000);
};


let newStudent = {name:"Ali",subject:"Python"};
enrollStudent(newStudent,getStudents);
// getStudents();


// function inside then is run as - resolve()
// function inside catch is run as - reject()