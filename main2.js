let moves = ["rock", "paper", "scissors"]
checkLenght()
let moveInput = prompt('Enter your move');
let games =0 ;
let wins = 0;
let losses = 0;
let draws = 0;


function rps (playerMove, computerMove){
playerMove = moves.indexOf(playerMove)
computerMove = moves.indexOf(computerMove)
if (playerMove == computerMove) {
    games++
    draws++
}
else if (playerMove == moves.length - 1 && computerMove == 0) {
    games++
    losses ++
}
else if (computerMove == moves.length - 1 && playerMove == 0) {
    games++
    wins ++
}
else if (playerMove > computerMove) {
    games++
    wins ++
} else {
    games++
    losses ++
    }
}

function computermoves(){

 let randomNumber =  Math.floor(Math.random() * moves.length);

 if (randomNumber === 0) {
     alert(" Computer: Rock")
    return 'rock'
  }
  if (randomNumber === 1) {
      alert(" Computer: Paper")
    return'paper'
  }
  if (randomNumber === 2) {
     alert(" Computer: Scissors")
    return 'scissors'
  }
}

function scores(){
  alert(`You have played ${games} games. Score: Wins ${wins}, Losses ${losses}, Draws ${draws}.`)
}

function checkLenght(){
    let username = prompt('Enter your username')
    if(username.length > 10){
     alert("Username must be up to 10 Characters")
     username = prompt('Enter your username again')
    } else { 
        return alert(`Hello ${username}!`)
    } 
}

function everthing (){
 while (true) {
  rps(moveInput, computermoves())
  scores()
  if (confirm("Wanna continue?") == true) {
    moveInput = prompt('Enter your next move');
   } else {
     return alert( "Bye Bye!" );
      }
    }
  }


let result = everthing()
console.log(result)
