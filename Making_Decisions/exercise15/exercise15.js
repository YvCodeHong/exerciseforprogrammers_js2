//Password Validation 
//Create a simple program that validates user login credientials
//The program must prompt the user for a username and password. 
//The program should compare the password given by user to a known password.
//If the password matches, the program should display "Welcome!" If it doesn't match the progra should
//display "I don't know you".

function passwordValidation() {
    const username = prompt("Enter username");
    const password = prompt("What is the password?");
    const confirmpassword = "abc$123";
    if(password != confirmpassword) {
        alert("I don't know!")}
        else{
            alert("Welcome!");
        }
    }





    