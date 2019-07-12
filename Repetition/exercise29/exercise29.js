//Handling Bad Input 

//Write a quick calculator that prompts for the rate
//of return on an investment and calculates how many years 
//it will take to double your investment. 

//The formula is 

    //years = 72/r 

//where r is the stated rate of return. 


//1. prompts for the rate of return 
//2. const rate = prompt("What is the rate of return?");
//3. if user enters '0', it should return 'Sorry. That's not a valid input'. 
//4. if user enters 'ABC'(non-numeric values), it should return 'Sorry, That's not valid input' 
//5. else if user enters a number, then it should return: "It will take 18 years to double your 
//initial investment". 

function badInput() {
    const rate = prompt("What is the rate of return?");
    const numInvestment = 72 / rate; 
    if(rate !== 0) {
        alert("Sorry. That's not a valid input");
        const rate = prompt("What is the rate of return?");
    } else if(rate === isNaN(num)) {
        alert("Sorry, That's not a valid input");
        const rate = prompt("What is the rate of return?");
    } else {
        alert("It will take" + ' ' + numInvestment + ' ' +  "years to double your initial investment");
    }
}

    
