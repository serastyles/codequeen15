const mainHeading = document.querySelector("#main-heading");
console.log(mainHeading);

const introparagraph = document.querySelector(".intro-paragraph");
console.log(introparagraph);

const allParagraphs = document.querySelectorAll(".intro-paragraph");
console.log(allParagraphs);

// selecting the second paragragh options
const secondParagraph = allParagraphs[1];
console.log(secondParagraph);

const secondParagraphByNthChild = document.querySelector("p:nth-child(2)");
console.log(secondParagraphByNthChild);

// using getElementById
const mainHeadingById = document.getElementById("main-heading");
console.log(mainHeadingById)

const introParagraphByClassName = document.getElementsByClassName("Intro-paragraph");
console.log(introParagraphByClassName);

// Manipulating the DOM
mainHeading.textContent = "Hello, This is JavaScript in the Dom!";
mainHeading.style.color = "blue";
mainHeading.style.fontSize = "60px";
mainHeading.style.fontstyle = "verdana";

// Event handling
// Examples of events 
// 1. Click event, 2.Mouseover event 3.Keydown event,
// 4. Input event, 5. Submit event

const changeButton = document.querySelector("#change-paragraph");
changeButton.addEventListener("click",function(){
secondParagraph.textContent = "Paragraph has been changed!";
secondParagraph.style.color = "red";
secondParagraph.style.fontSize = "30px";
})


