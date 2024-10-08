console.log("Hello World!")


let humanScore = 0;
let computerScore = 0;

let buttons= document.querySelectorAll('.rps')
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const choice = button.textContent.toLowerCase();
        playRound(choice);
    })
})


function playRound(choice){

    const humanChoice = choice;
    const computerChoice = getComputerChoice();

    let yourChoiceContainer = document.querySelector('.your-choice');
    yourChoiceContainer.textContent = 'Your choice:  ' + humanChoice;

    let computerChoiceContainer = document.querySelector('.computer-choice');
    computerChoiceContainer.textContent = 'Computer choice:  ' + computerChoice;

    let winContainer = document.querySelector('.win-lose');
    

    let textChoice = 'Your choice:  ' + humanChoice + '\nComputer choice:  ' + computerChoice;
    if (humanChoice === computerChoice){
        winContainer.textContent = 'Draw';
    } else if (humanChoice == 'rock' && computerChoice == 'scissors'){
        winContainer.textContent = 'You win!';
        humanScore += 1;
    } else if (humanChoice == 'paper' && computerChoice == 'rock'){
        winContainer.textContent = 'You win!';
        humanScore += 1;
    }
    else if (humanChoice == 'scissors' && computerChoice == 'paper'){
        winContainer.textContent = 'You win!';
        humanScore += 1;
    } else {
        winContainer.textContent = 'You lose!';
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
    let winContainer = document.querySelector('.win-lose');
    winContainer.textContent = '';

    let yourChoiceContainer = document.querySelector('.your-choice');
    yourChoiceContainer.textContent = 'Your choice:  ';

    let computerChoiceContainer = document.querySelector('.computer-choice');
    computerChoiceContainer.textContent = 'Computer choice:  ';


    UpdateScore()
}

function UpdateScore(){
    document.getElementById("your-score").innerHTML = humanScore;
    document.getElementById("computer-score").innerHTML = computerScore;

}

