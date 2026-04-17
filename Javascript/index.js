console.log("My name is Sarah Nakanwagi ");

// variables
// Declaring variables uses var, let and const keywords.
// var is function-scoped that can be redeclaired and updated

var name = "Nakanwagi";
console.log(name);
name = "sarah";
console.log(name);

// let is block-scoped, can be updated butt not redeclared.
let age =25;
console.log(age);
age =26;
console.log("My age has been updated to", age);

// cont is block-scoped and cannot be updated and redeclared
const gender = "female";
const citizenship = "Ugandan";
console.log("I am a", gender) //assigning a new variable will bring an error.

// Data types 
// JavaScript has several data types including:

// 1. string (uses quotes or put in quotes)
let greeting = "Hello CodeQueens, How are you doing?"
console.log(greeting);
console.log(typeof greeting);

// 2. Number
let x = 10;
let y = 12;
console.log(x+y);
console.log(typeof y);

// 3. undefined

// 4. object
// Example of an array object
let person = {
name: "Sara",
    age: 14,
    district: "Wakiso",
    isstudent: true,
    hobbies: ["travelling", "swimming", "music"], 
    address: {
        street: "123, nabagereka lane",
        city: "Nabagereka",
        country: "Uganda"
    }
       
}
console.log(person);
console.log(person["name"]); //accessing the name property
console.log(person.address.city)
console.log(person.hobbies[1])  
    


// 5. Boolean

// 6. symbol

// conditions.
// 1. if statements
let condition = true;
let condition1 = false;
let condition2 = false;
let condition3 = true;
if (condition) {
    // code to be executed if condition is true
}

// 2. if-else condition
if (condition) {
    // code to be executed if condition is true
}
else {
    // code to be executed if condition is true
}

// 3. else-if condition
if (condition) {
    // code to be executed if condition is true
}
else if (condition2) {
    // code to be executed if condition1 is true
}
else if (condition3) {
    // code to be executed if condition1 and condition2 are false
}
else {
    // condition to be executed if condition is true
}

// examples 
let mark = 80;
if (mark > 69) {
console.log("very good, you have passed the exam")
}

if (mark >= 70) {
    console.log("You have passed the exam")
} else {
    console.log("You have failed the exam")
}
// Comparison Operators
// 1. Equal to (==) 
// 2. Not equal to(!=)
// 3. Strict equal to (===)
// 4. Strict not equal to(!==)
// 5. Greater than(>)
// 6. Less than (<)
// 7. Greater than or equal to(>=)
// 8. Less than or equal to (<=)

// Arrays 
let cars =["Benz", "Toyota", "Rangerover", "Volvo"];
console.log(cars);
console.log(cars[2])


// A: Exceptional (80-100%): Exceptional performance, high creativity.
// B: Outstanding (70-79%): High level of competence.
// C: Satisfactory (60-69%): Adequate level of competence.
// D: Basic (50-59%): Minimum level of competence.
// E: Elementary (0-49%): Below basic level; demonstrates some knowledge but does not qualify for a certificate. 

let marks = 22;

if (marks >= 80) {
    console.log("Your grade is D1, Exceptional performance, high creativity.");
} else if (marks >= 75) {
    console.log("Your grade is D2, High level of competence.");
} else if (marks >= 70) {
    console.log(" Your grade is C3, High level of competence.");
} else if (marks >= 65) {
    console.log("Your grade is C4, Adequate level of competence.");
} else if (marks >= 60) {
    console.log("Your grade is C5, Adequate level of competence.");
} else if (marks >= 55) {
    console.log("Your grade is C6, Minimum level of competence.");
} else if (marks >= 50) {
    console.log("Your grade is P7, Minimum level of competence.");
} else if (marks >= 45) {
    console.log("Your grade is P8, Demonstrates some knowledge but is not proficient ")
} else {
    console.log("Your grade is F9, This is Below basic level, pull up your socks.")
    
}
   
// Grading math scores, (An array called scores containing objects with each object having a name and score properties ) 
// Loops help us to look through an array and return a specific item 

let scores = [
    {name: "Annet", score :85},
    {name: "Gloria", score :65},
    {name: "Sanyu", score :70},
    {name: "Scovia", score :55},
    {name: "Racheal", score :90},
    {name: "Winnie", score :34},
    {name: "Rose", score :49},
]

scores.forEach(student => {
    let grade;

    if (student.score >= 90){
        grade = "A"
    } else if (student.score >= 80){
        grade = "B"
    } else if (student.score >= 70){
        grade = "C"
    } else if (student.score >= 60){
        grade = "D"
    } else if (student.score >= 50){
        grade = "E"
    } else {
        grade = "F"
    }
    console.log(student.name +":" + student.score +" And the grade is - " + grade)
        
}) 

// Functions 
// Functions are reusables blocks of code that perfom a specific task. They can take parameters and return values. 
// Function declaration // we use a function keyword to declare a function

function functionName() {
    //  code to be executed
    return parameter;// returning the parameter
}

function funcName(parameter){
    // code to be executed
    return parameter //returning parameter
}
function funcWithParameters(parameter1, parameter2, parameter3){
    // code to be executed
    return parameter1+parameter2+parameter3; //returning the sum of parameters
}
// working example of a function
function returnSomeValue() {
    let value = "This is my first working function in JavaScript";
    console.log(value);
}
returnSomeValue();
function returnParameter(parameter) {
    return parameter;
}
// console.log(returnParameter("Hello,this is my second function in JavaScript"));
const result = returnParameter("Hello, this is my second function in JavaScript");
console.log(result);

function addNumbers(x, y) {
    return x + y;
}
const sum = addNumbers(4, 5);
console.log(sum);

// Loops 
// A loop is a way to repeat something automatically instead of writing it again and again.
//  A loop runs the same block of code multiple times until a condition is met. 

// for loop
// use when you know how many times to run.
// for (let i =1; i <=5; i++)
// let i =1 //start point
// i <=5 //condition(keep going while true)
// i++ increase by 1 each time // runs five times increasing by 1 each time
// i-- decrease by 1 each time // runs five times decreasing by 1 each time

// for (let i = 0; i < students.length; i++) {
// console.log(students[i]);
// }
// This works even if you have 100 students.

// For increasing numbers
 for (let i =0; i <7; i++) {
    console.log(i)
 }

//  For decreasing numbers 
for (let i =7; i >0; i--) {
    console.log(i)
}

const myCars = ["volvo", "benz", "rangerover", "toyota"];
console.log(myCars);

const numberOfCars =myCars.length;
console.log(numberOfCars);

for(let i =0; i <myCars.length; i++) {
    console.log(myCars[i]);
}

for (let car of myCars) {
    console.log(car);
}

for (let car of myCars) {
    function printCarPosition(car){
        const index = myCars.indexOf(car);
        console.log("The position of " + car + " in the array is " + index);
    }
        printCarPosition(car);
        console.log(car);
 }

//  while loop
// while (condition) {
//     // code to be executed as long as the condition is true
// }

 let id =0; //incrementing while loop
 while (id < 7) {
    console.log("From the while loop", id);
    id ++;
 }
 
 let id2 =7; //decrementing while loop
 while (id2 > 0) {
    console.log("From the while loop", id2)
    id2 --
 }

let password = "";
while (password !== "1234") {
    password  = prompt ("Please enter the correct password:");
}

// Do-while loop
    do {
// code to be executed}
    }
  while (condition);

  let i =0;
  do {
    console.log("From the do-while loop ", i);
    i ++
  } while (i<7);

//   Arrow functions
// Traditional function expression
const traditionalFunction = function() {
    console.log("This is a traditional function expression.");
}
traditionalFunction();
function anotherTraditionalFunction() {
    console.log("This is a traditional function.");
}
anotherTraditionalFunction();

// Arrow function expression
// Arrow function with no parameters
const sayHello = () => {
    console.log("Hello from an arrow function!");
};
sayHello();

// Arrow function with one parameter can omit parentheses
const square = n => n * n;
console.log("square(5):", square(5));

// // Arrow function with multiple parameters
// const add = (a, b) => a + b;
// console.log("add(4, 5):", add(4, 5));

// Arrow functions are frequently used with array methods
const colors = ["red", "green", "blue"];
const upperColors = colors.map(color => color.toUpperCase());
console.log("upperColors:", upperColors);
const arrowFunction = () => {
    console.log("This is an arrow function expression.");
}
arrowFunction();
const add = (a, b) => {
    console.log(a + b)
}
add(3,4)

// JSON (JavaScript Object Notation) is a lightweight data-interchange format that is easy for humans to read and write, and easy for machines to parse and generate. It is commonly used for transmitting data in web applications between a server and a client. JSON is based on a subset of the JavaScript programming language, and it uses a simple syntax to represent data structures such as objects and arrays.
// Javascript Object.
const task = {
    id: 1,
    title: "complete JavaScript assignment",
    completed: false

}
console.log(task);

// JSON string
const taskJSON = JSON.stringify(task);
console.log(taskJSON);

// Parsing JSON back to a JavaScript object
const parsedTask = JSON.parse(taskJSON);
console.log(parsedTask);

// Local Storage
// Storing data in the browser's local storage
localStorage.setItem("Name", "Sarah Nakanwagi");
localStorage.setItem("task",taskJSON);

//retrieving data from local storage
const nameFromStorage = localStorage.getItem("Name");
console.log("Name from localstorage:", nameFromStorage);

const taskFromStorage = localStorage.getItem("task");
console.log(taskFromStorage);












