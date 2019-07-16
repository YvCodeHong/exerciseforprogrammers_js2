//Filtering Values 

//Create a program that prompts for a list of numbers, 
//separated by spaces. Have the program print out a new list 
//constaining only the even numbers. 

function filteringValues() {
    const num = prompt("Enter a list of numbers, separated by spaces:"); 
    const listofNum = num.split(" ");
    for( let i =1; i<listofNum; i++) {
        if(i % 2 === 0) {
            console.log("The even numbers are:" + i);
        }
    }
}


//function with an argument

function filterEvenNumbers(num) {
    const listofNum = num.split(" ");
    for(let i = 0; i<listofNum; i++) {
        if(i % 2 === 0) {
            console.log("The even numbers are:" + i);
        }
    }
}