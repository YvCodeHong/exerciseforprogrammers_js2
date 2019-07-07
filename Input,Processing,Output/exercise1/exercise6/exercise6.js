//Create a program that determines how many years you have 
//left until retirement and the year you can retire. It should
// prompt for your current age and the age you want to retire 
// and displays the output as shown in the example that follows.

function retirementCalculator() {
    var age = prompt("What is your current age?");
    var retireAge = prompt("At what age would you like to retire?");
    var yearsleft = retireAge - age;
    alert("You have" + ' ' + yearsleft + ' ' + "left until you retire");
    var year = new Date().getFullYear(); 
    var retireyear = year + yearsleft; 
    alert("It's" + ' '+  year + ' ' +  "so you can retire in" +  ' ' + retireyear); 
}


//another method to solving the retirement Calculator challenge. 

function retirementCalculator(age, retireAge) {
    const yearsleft = retireAge - age; 
    return "You have" + ' ' + yearsleft + ' ' + "left until you retire";
    const year = new Date().getFullYear();
    const retireyear = year + yearsleft;
    return "It's" + ' ' + year + ' ' + "so you can retire in" + ' ' + retireyear; 
}



