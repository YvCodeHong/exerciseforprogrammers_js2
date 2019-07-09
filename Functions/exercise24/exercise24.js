//Anagram Checker 

//Create a program that compares two strings and determines 
// if the two strings are anagrams. The program should prompt 
//for both input strings and display the output as shown in 
//the example that follows. 

function AnagramChecker()) {
    const firstString = prompt("Enter first string");
    const secondString = prompt("Enter the second string");
    alert(firstString + ' ' + "and" + ' ' + secondString + ' ' + "are anagrams");
}


//Functions with arguments 

function AnagramChecker(firstString, secondString) {
    return firstString + ' ' + "and" + ' ' + secondString + ' ' + "are anagrams";
}

//Implement the program using a function called isAnagram, which takes 
//two words as its arguments and returns true or false. Invoke this function 
//from your main program. 

function isAngram(firstString, secondString) {
    console.log(firstString === secondString); 
    console.log("firstString" === secondString); 
}

