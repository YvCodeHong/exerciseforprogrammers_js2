//Currency Conversion 

//Write a program that converts currency. Specifically, convert
//euros to U.S dollars. Prompt for the amount of money in 
//euros you have, and prompt for the current exchange rate
//of the euros. Print out the new amount in U.S dollars. The 
//formula for currency conversion is 


function currencyConversion() {
    const euros = prompt("How many euros are you exchanging?");
    const exchangeRate = prompt("What is the exchange rate?");
    const amount = euros * (exchangeRate/100);
    const twoDecimal = amount.toFixed(2);
    alert(euros +  ' ' + "euros at an exchange rate of" +  ' ' + exchangeRate + ' ' + "is" + ' ' + twoDecimal + ' ' + "U.S. dollars");
}

//function with an argument

function currencyConversion(euros, exchangeRate) {
    const amount = euros * (exchangeRate / 100);
    const twoDecimal = amount.toFixed(2);
    return euros + ' ' + "euros at an exchange rate of" + ' ' + exchangeRate + ' ' + "is" + ' ' + twoDecimal + ' ' + "U.S. dollars";
}

