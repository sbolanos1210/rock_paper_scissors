 //Creates a random number. based on amount it attributes a value of Rock Paper Scissors
function getComputerChoice(){
    let i = Math.floor(Math.random()*100);

        if (i <= 33) {
            return "rock";
        } else if (i >= 33 && i <= 66) {
            return "paper";
        } else {
            return "scissors";
        }
}
console.log(getComputerChoice())


 // grabs the human choice and returns it
function getHumanChoice() {
    let i = prompt("Please write Rock, Paper or Scissors"); 
        console.log(i);
        return i.toLowerCase();
        }


let humanScore = 0;
let computerScore = 0;


function playRound(humanChoice, computerChoice) {
    // normalize human input
    humanChoice = humanChoice.toLowerCase();
        
    if (humanChoice === "rock") {
        if (computerChoice === "paper") {
            console.log("You Lose!");
        } else if (computerChoice === "scissors") {
            console.log("You Win!");
        } else {
            console.log("Tie!");
        }
    }

    if (humanChoice === "paper") {
        if (computerChoice === "scissors") {
            console.log("You Lose!");
        } else if (computerChoice === "rock") {
            console.log("You Win!");
        } else {
            console.log("Tie!");
        }
    }
    
    if (humanChoice === "scissors") {
        if (computerChoice === "rock") {
            console.log("You Lose!");
        } else if (computerChoice === "paper") {
            console.log("You Win!");
        } else {
            console.log("Tie!");
        }
    }
}
      
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection)