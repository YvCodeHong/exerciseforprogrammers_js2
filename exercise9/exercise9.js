//Sometimes you have to round up to the next number rather 
//than follow standard rounding rules. 

//Calculate gallons of paint needed to paint the ceiling of a 
//room. Prompt for the length and width, and assume one 
// gallon covers 350 square feet. Display the number of gallons
//needed to paint the ceiling as a whole number. 

function paintCalculator() {
    const length = prompt("What is the length?");
    const width = prompt("What is the width?");
    const totalarea = length * width; 
    const area  = 350; 
    const paint = Math.ceil(totalarea / area); 
    alert("You will need to purchase" + ' ' + paint + ' ' + "gallons of paint to cover" + ' ' + totalarea + ' '+ "square feet");
}

