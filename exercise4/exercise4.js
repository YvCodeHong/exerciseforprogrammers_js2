//Create a simple mad-lab program that prompts for a noun, 
// a verb, an adverb, and an adjective and injects those into a story that you create

function madLib() {
    const noun = prompt("Enter a noun");
    const verb = prompt("Enter a verb"):
    const adjective = prompt("Enter a adjective");
    const adverb = prompt("Enter an adverb");
    alert("Do you" + ' ' + verb + ' ' + ' ' + "your" + ' ' + adjective + ' ' + noun + adverb + "?" + "That is hilarious!");

}

//function with arguments 
function madLib(noun, verb, adjective, adverb) {
    return "Do you" + ' ' + verb + ' ' + ' ' + "your" + ' ' + adjective + ' ' + noun + adverb + "?" + "That is hilarious!";
}

