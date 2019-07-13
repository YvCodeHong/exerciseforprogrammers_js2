//Handling Bad Input 

//Write a quick calculator that prompts for the rate
//of return on an investment and calculates how many years 
//it will take to double your investment. 

//The formula is 

    //years = 72/r 

//where r is the stated rate of return.

//1. Ask the question to the user "What is the rate of return?"
//2. store the rate. 
//3. if the user enter a rate in string 'ABC', return 'Sorry, that's not a valid input' 
//4 if the user enter a rate which is 0, return 'Sorry, that's not a valid input' 
//5. if the user enter a number, then use the formula to calculate the years it will take to double investment

function badInput() {
    const rate = prompt("What is the rate of return?");
    while (true) {
        if (rate !== 0) {
            alert("Sorry, That's not a valid input");
        } else if (rate !== isNaN()) {
            alert("Sorry, That's not a valid input");
        }
        break;
    }
    const numInvestment = 72 / rate;
    console.log("It will take" + ' ' + numInvestment + ' ' + "years to double your initial investment.");
}



function badInput() {
    const rate = prompt("What is the rate of return?");
    while (true) {
        if (rate !== 0 && rate !== isNaN()) {
            alert("Sorry, That's not a valid input");
        } 
        break;
    } 
    const numInvestment = 72 / rate;
    console.log("It will take" + ' ' + numInvestment + ' ' + "years to double your initial investment.");
}
