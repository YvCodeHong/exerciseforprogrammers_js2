//Adding Numbers 

//Write a program that prompts the user for five numbers and computes 
//the total of the numbers 

//1. Ask the user to "Enter a number"
//2. Number is stored unless the 5th number has been used. 
//3. The program should ask the user again. 
//4. User enters the number 
//5. Num is stored until the 5th num. 
//6. Once 5th num is asked - All all the numbers in the array. 
//7 return 'The total is ...'

function addNumber() {
    var i = 0;
    var sum = 0;
    do {
        var number = prompt("Enter a number:");
        sum += parseInt(number);
        i++;
        console.log("Number: " + number);
    }
    while (i < 5);

    console.log('The total is'  +  ' ' + sum);
} 

