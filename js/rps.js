console.log("Hello World!")


let humanScore = 0;
let computerScore = 0;




function playRound(){

    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();

    console.log('Your choice: ' + humanChoice);
    console.log('Computer choice: ' + computerChoice);

    if (humanChoice === computerChoice){
        alert('Draw')
    } else if (humanChoice == 'rock' && computerChoice == 'scissors'){
        alert('You win');
        humanScore += 1;
    } else if (humanChoice == 'paper' && computerChoice == 'rock'){
        alert('You win');
        humanScore += 1;
    }
    else if (humanChoice == 'scissor' && computerChoice == 'paper'){
        alert('You win');
        humanScore += 1;
    } else {
        alert('You lose');
        computerScore += 1;
    }
    UpdateScore();
}

function startGame(){
    playRound();
}




function getComputerChoice(){
    let max = 3;
    switch(getRandomInt(max)){
        case 0:
            choice = 'rock';
            break;
        case 1:
            choice = 'paper';
            break;
        case 2:
            choice = 'scissors';
            break;
    }
    return choice;
}

function getRandomInt(max){
    return Math.floor(Math.random() * max);
}

function getHumanChoice(){
    let choice = prompt("Rock, Paper or Scissors? or quit");
    choice = choice.toLowerCase();

    while(!(choice == 'rock' || choice == 'paper' || choice == 'scissors')){
        console.log('Try again, Input invalid')
        choice = prompt("Rock, Paper or Scissors?");
        choice = choice.toLowerCase();
    }
    return choice.toLowerCase();
}

function quitGame(){
    alert('Resetting Game');
    humanScore = 0;
    computerScore = 0;
    UpdateScore()
}

function UpdateScore(){
    console.log(document.getElementById("your-score").innerHTML);
    document.getElementById("your-score").innerHTML = humanScore;
    console.log(document.getElementById("your-score").innerHTML);
    document.getElementById("computer-score").innerHTML = computerScore;
}