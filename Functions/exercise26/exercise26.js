//Monthly to Pay off a credit card

//Write a program that will help you determine how many 
//months it will take to pay off a credit card balance. 
//The program should ask the user to enter the balance of a credit 
//card and the APR of the card. The program should then return the 
//number of months checked. 
//The formula for this is: 

function payCreditCard() {
    const balance = prompt("What is your balance?");
    const APR = prompt("What is the APR on the card (as a percent)?");
    const monthlyPayment = prompt("What is the monthly payment you can make?");
    const num = (-1/30)*Math.log(1+balance/monthlyPayment)*(1-(1+APR**30))/Math.log(1+APR, 10);
    alert("It will take you" + ' ' +  num  + ' ' + "months to pay off this card");
}


