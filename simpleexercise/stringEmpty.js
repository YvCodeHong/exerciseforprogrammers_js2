//Create a function that returns true if a string is empty and false otherwise. 

function stringEmpty(string) {
    if(string === "") {
        return true; 
     } else {
         return false; 
     }
}


//shortcut 

function stringEmpty(string) {
    return string === "" ? true: false; 
}