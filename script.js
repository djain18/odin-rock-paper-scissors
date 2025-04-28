let humanScore = 0,
  computerScore = 0;

function getComputerChoice() {
  let randomNumber;
  randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber == 0) {
    return "Rock";
  } else if (randomNumber == 1) {
    return "Scissors";
  } else {
    return "Paper";
  }
}

function getHumanChoice() {
  let choice = prompt("Rock, Paper or Scissors?");
  return choice;
}

function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();
  computerChoice = computerChoice.toLowerCase();
  if (computerChoice == "rock" && humanChoice == "scissors") {
    computerScore++;
    return "You lose! Rock beats Scissors.";
  } else if (computerChoice == "scissors" && humanChoice == "paper") {
    computerScore++;
    return "You lose! Scissor beats Paper.";
  } else if (computerChoice == "paper" && humanChoice == "rock") {
    computerScore++;
    return "You lose! Paper beats Rock.";
  } else if (computerChoice == "rock" && humanChoice == "paper") {
    humanScore++;
    return "You win! Paper beats Rock.";
  } else if (computerChoice == "paper" && humanChoice == "scissors") {
    humanScore++;
    return "You win! Scissors beat Paper.";
  } else if (computerChoice == "scissors" && humanChoice == "rock") {
    humanScore++;
    return "You win! Rock beats Scissors.";
  } else {
    return "Tie, try again";
  }
}

function playGame() {
  for (let i = 0; i < 5; i++) {
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();
    console.log(playRound(humanChoice, computerChoice));
  }
  if (humanScore > computerScore) {
    alert("HUMAN WINS! Computers are bleh");
  } else if (computerScore > humanScore) {
    alert("COMPUTER WINS! Humans are bleh");
  } else {
    alert("IT'S A TIE!");
  }
  
}

playGame();
