//Create a program that computes simple interest. Prompt for 
//the principle amount, the rate as a percentage, and the time,
//and display the amount accrued (principle + internet). 

function SimpleInterest() {
    const principle = prompt("Enter the principal");
    const rateInterest = prompt("Enter the rate of interest");
    const numberYears = prompt("Enter the number of years");
    const displayaccureAmount = principle * (1 + (rateInterest / 100) * numberYears);
    alert("After" + ' ' + numberYears + ' ' + "years at" + ' ' + rateInterest + "%" + ' ' + ',' + "the investment will be worth" + ' ' + displayaccureAmount); 
}




