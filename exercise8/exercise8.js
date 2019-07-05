//Pizza Party. 
// Write a program to evenly divide pizzas. Prompt for the 
//number of people, the number of pizzas, and the number of 
//slices per pizza. Ensure that the number of pieces comes out 
//even. Display the number of pieces of pizza each person should get. 
//If there are leftovers, show the number of leftover pieces. 

function pizzaParty() {
    const people = prompt("How many people?");
    const pizzas = prompt("How many pizzas do you have?");
    const pieces = prompt("How many slices? ");
    alert(people + ' ' + "people with" + ' ' + pizzas + ' ' + "pizzas");
    const total_pieces = pizzas * pieces;
    const pieces_remain = total_pieces / people; 
    alert("There are" + ' ' + pieces_remain + ' ' + "leftover pieces");    
}




