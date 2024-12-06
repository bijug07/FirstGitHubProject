'use strict';
// start with secert number find it 
let secretNumber = Math.trunc(Math.random() * 50 + 1);
const secretNum = document.querySelector('.number');
const message = document.querySelector('.message');
const scorecurrent = document.querySelector('.score');
const highscore = document.querySelector('.highscore');
const body = document.querySelector('body');
const guess = document.querySelector('.guess');
secretNum.textContent = "?";
let score = 50;
let hscore = 0; //store the highscore so that it persist;

// Intiating the click event for the button Check
document.querySelector('.check').addEventListener
('click', function(){
    // taking the input and converting into number
    let guessed = Number((guess).value);

    // no number was gussed in the input
    if (!guessed){
        message.textContent = "⛔Enter a number";
    
    // the gussed number is correct
    } else if (guessed === secretNumber){
        message.textContent = "🚀You guess it Correct! Congragulation!!!";
        body.style.backgroundColor = 'blue';
        secretNum.style.width = '25rem';
        secretNum.textContent = secretNumber;
        
        // update the high score if the hscore is higher
        if (score > hscore) {
            hscore = score
            highscore.textContent = hscore;
        }
        

        // check button to tbe disenabled and the input guess 
        guess.disabled = true;
        checkButton.disabled = true;


        // the guessed number is wrong
        } else { 
            if(score > 1) {
                message.textContent = (guessed > secretNumber) ? "📈Too high.. " : "📉Too low... ";
                score--;
                scorecurrent.textContent = score;
            } else {
                message.textContent = "😭 you have lost the game.. try again";
                body.style.backgroundColor = 'red';
                checkButton.disabled = true;
                guess.disabled = true;  
                guess.value = " "  
                
            }

        }
})


// Event Listener for Again Button
document.querySelector('.again').addEventListener
('click', function(){
    // score should be 20, message be Start Guessing, change the secret number
    score = 50
    scorecurrent.textContent = score;
    message.textContent = "Start Guessing ....";
    secretNumber = Math.trunc(Math.random() * 50 + 1);
    secretNum.textContent = '?';
    body.style.backgroundColor = '#073b13';
    secretNum.style.width = '15rem';

    // Enable the Check button and Input guess
    guess.disabled = false;
    guess.value = " ";
    checkButton.disabled = false;
    
})