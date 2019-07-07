//Compound Interest
//Write program to compute the value of an investment 
//compounded over time. The program should ask for the 
//starting amount, the number of years to invest, the interest
//rate, and the number of periods per year to compound. 

function compoundInterest() {
    const principal = prompt("What is principal amount?");
    const rate = prompt("What is the rate?");
    const numberYears = prompt("What is the number of years?");
    const interestRate = prompt("What is the number of times the interest is compounded per year?");
    const amount = principal * Math.pow((1 +(rate/100)/interestRate), interestRate * numberYears);
    const roundtotwodecimals = amount.toFixed(2);
    alert( principal + ' ' + "invested at" + ' ' + rate + '%' + ' ' + "for" + ' ' + numberYears +  ' '+ " years compounded" + ' ' + interestRate + ' ' + " times per year is " + ' ' + roundtotwodecimals + '.');
}


