//Password Generator 

//Create a program that generates a secure password. 
//Prompt the user for the minimum length, the number of special 
//characters and the number of numbers.
//Then generate a password for the user using those inputs 

function passwordGenerator() {
    var password = prompt("What's the minimum length?");
    var specialCharacters = prompt("How many special characters?");
    var numbers = prompt("How many numbers?");
    var generatepassword = [password + specialCharacters + numbers];
    var getRand = function(values) {
        return values.charAt(Math.floor(Math.random() * values.length));
    }  
}