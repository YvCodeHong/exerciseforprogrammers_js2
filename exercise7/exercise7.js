//Area of a Rectangular Room 
//Create a program that calculates the area of a room. Prompt 
// the user for the length and width of the room in feet. Then 
// display the area in both square feet and square meters. 

function rectangularRoom() {
    const length = prompt("What is the length of the room in feet?");
    const width = prompt("What is the width of the room in feet?");
    alert("You entered a dimension of" + ' ' + length + ' ' + "feet by" + ' ' + width + ' ' + "feet");
    const squareFeet = length * width;
    alert("The area is" + ' ' + squareFeet + ' ' + "square feet");
    //converting square meters
}
    

