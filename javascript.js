const hand= ['rock', 'paper', 'scissors'];
let playerScore=0;
let compScore=0;
let gameStatus=0;

function refreshPage(){
   window.location.reload();
} 
//Makes a selection for the computer 
function computerPlay(){
   let temp= Math.floor((Math.random() * 3) + 1);
   temp = temp-1;
   return hand[temp];
}

//disables buttons after the game is complete
function disableButtons(){
   buttons= document.querySelectorAll('button.playButton');
   buttons.forEach(function (element){
      element.disabled=  true;
   })
   //code for the refresh button
   refreshButton= document.querySelector('button.playAgain');
   refreshButton.style.display= "block";
   refreshButton.disabled= false;
}
//Addes the winner deatails in the results bar and updates Ui score
function updateUI(){
       playerScoreDiv = document.querySelector('p#playerScore');
        compScoreDiv = document.querySelector('p#compScore');
        scoreBarDiv=document.querySelector('div.scoreBar');
        if (playerScore == 5)
        {
           resultsDiv.textContent= "Congrats, you win!!"
           playerScoreDiv.textContent = "Player:"+ playerScore;
           scoreBarDiv.style.backgroundColor = "#82FB61";
           disableButtons();
        } 
        else if(compScore == 5){
            resultsDiv.textContent= "Oops. you lost!!"
            compScoreDiv.textContent = "Computer:"+ compScore;
            scoreBarDiv.style.backgroundColor = "#F25555";
           disableButtons();
        }
        else{
        switch(gameStatus){
           case 0: break;
           case 1: playerScoreDiv.textContent = "Player:"+ playerScore;
                   scoreBarDiv.style.backgroundColor = "#82FB61";
                   break;
           case 2: compScoreDiv.textContent = "Computer:"+ compScore;
                   scoreBarDiv.style.backgroundColor = "#F25555";
                   break;
           default: break;
        }}
}

//Decides a winner and returns a string with the final result of the round 
function decideWinner(playerSelection, computerSelection){
   playerSelectionFixed=playerSelection.toLowerCase();
   computerSelectionFixed=computerSelection.toLowerCase();
   let displayMessage= undefined;
   if (playerSelectionFixed==computerSelectionFixed){
      displayMessage= "Play again, its a tie!";
      gameStatus=0;
   } 
   else if (playerSelectionFixed=='rock'&&computerSelectionFixed=='scissors' || playerSelectionFixed=='scissors'&&computerSelectionFixed=='paper' || playerSelectionFixed=='paper'&&computerSelectionFixed=='rock'){
      displayMessage= "You win, "+playerSelectionFixed+" beats "+computerSelectionFixed;
      playerScore++;
      gameStatus=1;
   } 
   else {
      displayMessage= "You lose, "+computerSelectionFixed+" beats "+playerSelectionFixed;
      compScore++;
      gameStatus=2;
   }
   return displayMessage;
}

document.addEventListener('click', function playerSelect(e){
   var target = e.target || e.srcElement;
    if (target.className.match('playButton'))
    {
        //an element with the keyword Class was clicked
        let playerSelection= e.target.id;
        computerSelection= computerPlay();
        let winnerResult= decideWinner(playerSelection, computerSelection);
        resultsDiv= document.querySelector('div.results');
        resultsDiv.textContent= winnerResult;
        updateUI();
    }
});
 

if (playerScore>compScore){
   console.log("You beat the computer!");
}
else{
   console.log("The computer beat you!");
}