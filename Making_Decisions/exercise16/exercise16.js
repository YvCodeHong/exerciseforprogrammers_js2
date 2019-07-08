// Write a program that asks the user for their age and compare
//it to the legal driving age of sixteen. IF the user is sixteen or 
//order, then then program should display "You are old enough to legally drive"
// If the user is under sixteen, the program should display "You are not old enough to legally drive". 

function legaldrivingAge() {
    const age = prompt("What is your age?");
    const confirmdrivingAge = 16; 
    if(age < 16) {
        alert("You are not old enough to legally drive")}
    else {
        alert("You are old enough to legally drive");
        }
     }


//function with arguments/refactor 

function legaldrivingAge(age) {
    const confirmdrivingAge = 16; 
    age < 16 ? alert("You are not old enough to legally drive"): alert("You are old enough to legally drive")
}