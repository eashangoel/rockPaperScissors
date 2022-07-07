const hand= ['rock', 'paper', 'scissors'];
let playerScore=0;
let compScore=0;

function computerPlay(){
   let temp= Math.floor((Math.random() * 3) + 1);
   temp = temp-1;
   return hand[temp];
}

function decideWinner(playerSelection, computerSelection){
   playerSelectionFixed=playerSelection.toLowerCase();
   computerSelectionFixed=computerSelection.toLowerCase();
   let displayMessage= undefined;
   if (playerSelectionFixed==computerSelectionFixed){
      displayMessage= "Play again, its a tie!";
   } else if (playerSelectionFixed=='rock'&&computerSelectionFixed=='scissors' || playerSelectionFixed=='scissors'&&computerSelectionFixed=='paper' || playerSelectionFixed=='paper'&&computerSelectionFixed=='rock'){
      displayMessage= "You win, "+playerSelectionFixed+" beats "+computerSelectionFixed;
      playerScore++;
   } else {
      displayMessage= "You lose, "+computerSelectionFixed+" beats "+playerSelectionFixed;
      compScore++;
   }
   return displayMessage;
}
 

for (let i=1; i<=5; i++){
playerSelection= prompt("Please enter your selection!");
computerSelection= computerPlay();
if(decideWinner(playerSelection,computerSelection)=='Play again, its a tie!'){
   i--;
   console.log(decideWinner(playerSelection,computerSelection));
}
else{
console.log(decideWinner(playerSelection,computerSelection));
}
}

if (playerScore>compScore){
   console.log("You beat the computer!");
}
else{
   console.log("The computer beat you!");
}