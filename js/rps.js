console.log("Hello World!")


let humanScore = 0;
let computerScore = 0;




function playRound(){

    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();


    let textChoice = 'Your choice:  ' + humanChoice + '\nComputer choice:  ' + computerChoice;
    console.log(textChoice);
    if (humanChoice === computerChoice){
        alert(textChoice + '\nDraw')
    } else if (humanChoice == 'rock' && computerChoice == 'scissors'){
        alert(textChoice + '\nYou win!');
        humanScore += 1;
    } else if (humanChoice == 'paper' && computerChoice == 'rock'){
        alert(textChoice + '\nYou win!');
        humanScore += 1;
    }
    else if (humanChoice == 'scissor' && computerChoice == 'paper'){
        alert(textChoice + '\nYou win!');
        humanScore += 1;
    } else {
        alert(textChoice+ '\nYou lose!');
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
    let choice = prompt("Rock, Paper or Scissors?");
    choice = choice.toLowerCase();

    while(!(choice == 'rock' || choice == 'paper' || choice == 'scissors')){
        alert('Try again, Input invalid')
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
    document.getElementById("your-score").innerHTML = humanScore;
    document.getElementById("computer-score").innerHTML = computerScore;
}