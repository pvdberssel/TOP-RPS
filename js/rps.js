console.log("Hello World!")


let humanScore = 0;
let computerScore = 0;


playRound();

function playRound(){

    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();

    console.log(humanChoice);
    console.log(computerChoice);

    if (humanChoice === computerChoice){
        console.log('Draw')
    } else if (humanChoice == 'rock' && computerChoice == 'scissors'){
        console.log('You win');
        humanScore += 1;
    } else if (humanChoice == 'paper' && computerChoice == 'rock'){
        console.log('You win');
        humanScore += 1;
    }
    else if (humanChoice == 'scissor' && computerChoice == 'paper'){
        console.log('You win');
        humanScore += 1;
    } else {
        console.log('You lose');
        computerScore += 1;
    }
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
        console.log('Try again, Input invalid')
        choice = prompt("Rock, Paper or Scissors?");
        choice = choice.toLowerCase();
    }
    return choice.toLowerCase();
}
