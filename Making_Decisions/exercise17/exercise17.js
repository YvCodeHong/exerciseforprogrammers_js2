//Blood Alcohol Calculator 

//Create a program that prompts for your weight, gender, 
// number of drinks, the amount of alcohol by volume of the 
// drinks consumed, and the amount of time since your last 
// drink. Calculate your blood alcohol content (BAC) using this
// formula. 
//  BAC = (A *(5.14/W * r)-.015 x H)


function alcoholCalculator() {
    const weight = prompt("What is your body weight?");
    const gender = prompt("What is your gender?");
    const numofDrinks = prompt("How many drinks have you had?");
    const amountofTime = prompt("How many hours has it been since your last drink?");
    const bac =(numofDrinks*5.14/weight * gender) - .015* amountofTime ; 
    alert("Your bac is" + bac); 
    if (bac >= 0.08) {
        alert("It is not legal for you to drive")
    }
    else {
        alert("It is legal for you to drive")
    }
}