// if the user enters nothing, state that the user must enter something into the program 


function numberofCharacters(input) {
    if(input === "") {
        console.log("Please enter a word");
    }else{
        const num = input.length;
        console.log(input + " " + "has" + " " + num + " " + "characters");
    }
}
