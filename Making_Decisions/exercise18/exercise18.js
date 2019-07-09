//Temperature Converter
//
//Create a program that converts temperatures from Fahrenheit
//to Celsius or from Celsius to Fahrenheit. Prompt for the 
//starting temperature. The program should prompt for the type of 
//conversion and then perform the conversion. 

//The Formula are C =(F - 32) x 5/9 
// F =(C X 9/5)+32


function cel_feh(C) {
    return F = (C*9/5)+32;
}

function feh_cel(F) {
    return c = (F-32) * 5/9;
}


function temperatureConverter() {
    const fahrenheit = prompt("Please enter the temperature in Fahrenheit");
    const celsius = (fahrenheit - 32) * 5 / 9
    alert("The temperature in Celsius is" + celsius); 
}

