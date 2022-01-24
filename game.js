const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
  button.addEventListener('click', playRound(button.id, computerPlay()));
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

function game() {

  console.log(playRound(playerChoice, computerChoice));
}

game();