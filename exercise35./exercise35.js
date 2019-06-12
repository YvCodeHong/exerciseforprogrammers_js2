//Create a program that picks a winner for a contest or prize 
//drawing. Prompt for names of contestants until the user 
//leaves the entry blank. Then randomly select a winner. 

    
var name;
var users = [];

while (true) {
    users.push(name = prompt("Enter a name:"));
    if (name === "") {
        break;
    }
};

var numUsers = users.length - 1;
var winner = Math.floor(Math.random() * numUsers + 1);

document.write("The winner is..." + users[winner]);


    



    
    

