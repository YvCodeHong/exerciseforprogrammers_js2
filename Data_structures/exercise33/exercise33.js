//Create a Magic 8 ball game that prompts for a question and 
// then displays either "yes", "no", "maybe", or "Ask again later". 


function magicBall() {
    const question = prompt("Will I be rich and famous?");
    const answer = ["Yes", "No", "Maybe", "Ask you later"];
    const newAnswer = answer[Math.floor(Math.random() * answer.length)];
    return newAnswer
}

magicBall();