/* An additional alternative approach to Friday's joint Hackathon code which I researched at 
the weekend, broke down, deciphered (to understand what was going on) and then wrote out again
as practice */

let gamesPlayed = 0;
let wins = 0;
let losses = 0;
let draws = 0;

// task 7: get the Player's name using a prompt;

let userName = prompt("Please enter your Username");
let userNameRegex = /[A-Z]/;

while (userName.length > 10 || !userNameRegex.test(userName[0])) {
  userName = prompt(
    `Username must be 10 characters or less and start with a capital letter.`
  );
}

// task 5: Game Loop - call startGame() function to run the game.

startGame();

let playAgain = confirm(`${userName}, do you want to play again?`);

while (playAgain) {
  startGame();
  playAgain = confirm(`${userName}, do you want to play again?`);
}

// task 4: getRandomMove

function getRandomMove() {
  let moves = ["rock", "paper", "scissors"];
  let randomNumber = Math.floor(Math.random() * moves.length);
  let randomMove = moves[randomNumber];
  return randomMove;
}

//task 1: Logic and task 2: Function

function getWinner(playerMove, computerMove) {
  if (playerMove === "rock" && computerMove === "rock") {
    return 0;
  } else if (computerMove === "paper") {
    return -1;
  } else if (computerMove === "scissors") {
    return 1;
  }

  if (playerMove === "scissors" && computerMove === "rock") {
    return -1;
  } else if (computerMove === "paper") {
    return 1;
  } else if (computerMove === "scissors") {
    return 0;
  }

  if (playerMove === "paper" && computerMove === "rock") {
    return 1;
  } else if (computerMove === "paper") {
    return 0;
  } else if (computerMove === "scissors") {
    return -1;
  }
}

// task 3: playerInput prompt and startGame
function startGame() {
  gamesPlayed++;
  let playerInput = prompt("Choose rock, paper or scissors");
  let computerMove = getRandomMove();
  let result;
  let userInputRegex = /rock|paper|scissors/;

  while (!userInputRegex.test(playerInput)) {
    playerInput = prompt("Choose rock, paper or scissors");
  }
  if (getWinner(playerInput, computerMove) === 1) {
    result = "You win!";
    wins++;
  } else if (getWinner(playerInput, computerMove) === 0) {
    result = "It's a draw";
    draw++;
  } else if (getWinner(playerInput, computerMove) === 1) {
    result = "Computer wins";
    losses++;
  }

  alert(`${userName} Chose: ${playerInput}. 
  Computer Chose: ${computerMove}. 
  Result: ${result}!`);

  alert(`Games Played: ${gamesPlayed}
    Number of Wins: ${wins}
    Number of Losses: ${losses}
    Number of Draws: ${draws}`);
}
