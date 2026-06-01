
function getComputerChoice() {
  const random = Math.random();
  if (random < 1 / 3) {
    return "rock";
  } else if (random < 2 / 3) {
    return "paper";
  } else {
    return "scissors";
  }
}
 
// Step 2: Get the human's choice
function getHumanChoice() {
  return prompt("Enter your choice: rock, paper, or scissors");
}
 
// Step 6: Play the full game (contains steps 4 & 5 inside)
function playGame() {
  // Step 4: Score variables (declared inside playGame per step 6)
  let humanScore = 0;
  let computerScore = 0;
 
  // Step 5: Play a single round
  function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
 
    if (humanChoice === computerChoice) {
      console.log(`It's a tie! You both chose ${humanChoice}.`);
      return;
    }
 
    if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "scissors" && computerChoice === "paper") ||
      (humanChoice === "paper" && computerChoice === "rock")
    ) {
      humanScore++;
      console.log(
        `You win! ${capitalize(humanChoice)} beats ${capitalize(computerChoice)}.`
      );
    } else {
      computerScore++;
      console.log(
        `You lose! ${capitalize(computerChoice)} beats ${capitalize(humanChoice)}.`
      );
    }
  }
 
  // Play 5 rounds
  for (let i = 1; i <= 5; i++) {
    console.log(`--- Round ${i} ---`);
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    console.log(`Score → You: ${humanScore} | Computer: ${computerScore}`);
  }
 
  // Declare overall winner
  console.log("=== Game Over ===");
  if (humanScore > computerScore) {
    console.log(`You win the game! Final score: You ${humanScore} - ${computerScore} Computer`);
  } else if (computerScore > humanScore) {
    console.log(`Computer wins the game! Final score: You ${humanScore} - ${computerScore} Computer`);
  } else {
    console.log(`It's a tie game! Final score: You ${humanScore} - ${computerScore} Computer`);
  }
}
 
// Helper: capitalize first letter
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
 
playGame();