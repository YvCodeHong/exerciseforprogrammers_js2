//Area of a Rectangular Room 
//Create a program that calculates the area of a room. Prompt 
// the user for the length and width of the room in feet. Then 
// display the area in both square feet and square meters. 

function rectangularRoom() {
    const length = prompt("What is the length of the room in feet?");
    const width = prompt("What is the width of the room in feet?");
    alert("You entered a dimension of" + ' ' + length + ' ' + "feet by" + ' ' + width + ' ' + "feet");
    const squareFeet = length * width;
    const squareMeter = squareFeet * 0.09290304; 
    const twoDecimal = squareMeter.toFixed(2);
    alert("The area is" + ' ' + squareFeet + ' ' + "square feet" + ' ' + twoDecimal + ' ' + "square meters");
}

//functions with arguements 

function rectangularRoom(length, width){
    const squareFeet = length * width;
    const squareMeter = squareFeet * 0.09290304;
    const twoDecimal = squareMeter.toFixed(2);
    return "The area is" + ' ' + squareFeet + ' ' + "square feet" + ' ' + twoDecimal + ' ' + "square meters";
}




    

