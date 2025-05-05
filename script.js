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

function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();
  computerChoice = computerChoice.toLowerCase();
  if (computerChoice == "rock" && humanChoice == "scissors") {
    computerScore++;
    return "You lose! Scissors cannot beat Rock.";
  } else if (computerChoice == "scissors" && humanChoice == "paper") {
    computerScore++;
    return "You lose! Paper cannot beat Scissors.";
  } else if (computerChoice == "paper" && humanChoice == "rock") {
    computerScore++;
    return "You lose! Rock cannot beat Paper.";
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
  let rockBtn = document.createElement("button");
  rockBtn.textContent = "Rock";
  let paperBtn = document.createElement("button");
  paperBtn.textContent = "Paper";
  let scissorsBtn = document.createElement("button");
  scissorsBtn.textContent = "Scissors";
  let resultDiv = document.createElement("div");
  let body = document.querySelector("body");
  let runningScore = document.createElement("div");
  const finalresult = document.createElement("h1");
  rockBtn.addEventListener("click", function () {
    const result = playRound("rock", getComputerChoice());
    resultDiv.textContent = "Result: " + result;
    runningScore.textContent =
      "Human Score: " + humanScore + " Computer Score: " + computerScore;
    body.appendChild(runningScore);
    if (humanScore == 5) {
      finalresult.textContent = "You win the game!";
    } else if (computerScore == 5) {
      finalresult.textContent = "You lose the game!";
    }
  });
  scissorsBtn.addEventListener("click", function () {
    const result = playRound("scissors", getComputerChoice());
    resultDiv.textContent = "Result: " + result;
    runningScore.textContent =
      "Human Score: " + humanScore + " Computer Score: " + computerScore;
    body.appendChild(runningScore);
    if (humanScore == 5) {
      finalresult.textContent = "You win the game!";
    } else if (computerScore == 5) {
      finalresult.textContent = "You lose the game!";
    }
  });
  paperBtn.addEventListener("click", function () {
    const result = playRound("paper", getComputerChoice());
    resultDiv.textContent = "Result: " + result;
    runningScore.textContent =
      "Human Score: " + humanScore + " Computer Score: " + computerScore;
    body.appendChild(runningScore);
    if (humanScore == 5) {
      finalresult.textContent = "You win the game!";
    } else if (computerScore == 5) {
      finalresult.textContent = "You lose the game!";
    }
  });

  
 
  body.appendChild(resultDiv);
  body.appendChild(rockBtn);
  body.appendChild(paperBtn);
  body.appendChild(scissorsBtn);
  body.appendChild(finalresult);
}

playGame();
