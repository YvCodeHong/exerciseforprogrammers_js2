// Tax Calculator 
//  Write a simple program to compute the tax on an order
// amount. The program should prompt for the order amount
// and the state. If the state is "WI," then the order must be 
//charged 5/5% tax. The program should display the subtotal, 
//tax, and total for Wisconsin residents but display just the 
//total for non-residents. 

function taxCalculator() {
    const order = prompt("What is the order amount?");
    const state = prompt("What is the state?");
    const tax = 0.55;
    const subtotal = order + tax;
    if (state === "WI") {
        alert("The total is $" + subtotal);
    } else {
        alert("The total is $" + order);
    }
}

//function with an arguement 

function taxCalculator(order, state) {
    const tax = 0.55;
    const subtotal = order + tax;
    if (state === "WI") {
        alert("The total is $" + subtotal);
    } else {
        alert("The total is $" + order);
    }
}


//refactor the code 

function taxCalculator(order, state) {
    const tax = 0.55; 
    const subtotal = order + tax; 
    state === "WI" ? alert("The total is $" + subtotal) : alert("The total is $" + order);
}



