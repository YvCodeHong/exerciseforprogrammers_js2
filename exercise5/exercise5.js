//Simple Math
//Write a program that prompts for two numbers. Print the 
//sum, difference, product, and quotient of those numbers as
//shown in the example output: 

function SimpleMath() {
    var number = +prompt("What is the first number?");
    var secondNumber = +prompt("What is the second number?"); 
    if(number < 0 || secondNumber < 0) {
        alert("Negative Value is not allowed");
        return false;
    }
    alert(number + secondNumber);
    alert(number - secondNumber);
    alert(number * secondNumber);
    alert(number / secondNumber);
} 

console.log(SimpleMath());

//Revise the program to ensure that inputs are entered as numeric values.
//Don't allow the user to proceed if the value entered is n
