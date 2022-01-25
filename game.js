let choices = ['rock', 'paper', 'scissors']

let buttons = document.querySelectorAll('button');
let displayComputerChoice = document.querySelector('#displayComputerChoice');

let response = function() {
  let result = document.querySelector('#result');
  let computerChoice = computerPlay();
  displayComputerChoice.textContent = choices[computerChoice];
  result.textContent = playRound(this.id, computerChoice);
}


buttons.forEach((button) => {
  button.addEventListener('click', response);
})



function computerPlay() {
  return Math.floor(3*Math.random())
}

function convertPlayerSelection(rawPlayerSelection) {
  rawPlayerSelection = rawPlayerSelection.toLowerCase();
  if (rawPlayerSelection == "rock") {
    return 0;
  }
  else if (rawPlayerSelection == "paper") {
    return 1;
  }
  else if (rawPlayerSelection == "scissors") {
    return 2;
  }
}
  

function playRound(playerSelection, computerSelection) {
  if ((playerSelection + 1) % 3 == computerSelection) {
    return "Computer Wins"
  }
  else if (playerSelection == computerSelection) {
    return "Tie"
  }
  else {
    return "Player Wins"
  }
}

