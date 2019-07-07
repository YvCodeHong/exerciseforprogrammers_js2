//Write a program that prompts for response times from a 
//website in miliseconds. 

//It should keep asking for values 
//until the user enters 'done' 

//The program should print the average time (mean), the 
//minimum time, the maximum time, and the standard deviation. 

//To compete the average(mean) 
//1. Compute the sum of all values. 
//2. Divide the sum by the number of values. 

function computingStatistics() {
    var answer = prompt("Enter a number");
    var listofAnswer = [];
    var num = parseInt(answer);
    listofAnswer.push(num);
    while (true) {
        if (answer === "done") {
            alert("Numbers:" + listofAnswer.length);
        } else {
            var answer = prompt("Enter a number");
            break; 
        }
    }
}





