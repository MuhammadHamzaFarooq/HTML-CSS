console.log("Learn Call Back Function");


// Prentened that this is response coming from the server
let students = [
    { name: "Muhammad Hamza Farooq", subject: "JavaScript" },
    { name: "Ziyad", subject: "Machine Learning" },
];

function enrollStudent(student, callback) {
    setTimeout(function(){
        students.push(student);
        console.log("Students has been enrolled");
        callback();
    },3000);
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