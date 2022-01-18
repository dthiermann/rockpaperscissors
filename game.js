function computerPlay() {
  let choice = Math.floor(3*Math.random())
  if (choice == 0) {
    return "Rock";
  } else if (choice == 1) {
    return "Paper";
  } else if (choice == 2) {
    return "Scissors";
  }
}

console.log(computerPlay())
console.log(computerPlay())
console.log(computerPlay())
