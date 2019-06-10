//Create a program that prompts for a quote and an author. 
//Display the quotation and author as shown in the example 
//output 
//What is the quote? These ain't the 
//1. quote 
//2 author 
//3. 

function printQuotes() {
    const quote = prompt("What is the quote?");
    console.log(quote);
    const author = prompt("Who said it?");
    console.log(author);  
    alert(author + "says" + "," + quote);
}
