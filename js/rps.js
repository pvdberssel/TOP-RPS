console.log("Hello World!")


function getComputerChoice(){
    let max = 3;
    switch(getRandomInt(max)){
        case 0:
            choice = 'Rock';
            break;
        case 1:
            choice = 'Paper';
            break;
        case 2:
            choice = 'Scissors';
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
        console.log('Not a correct option')
        choice = prompt("Rock, Paper or Scissors?");
        choice = choice.toLowerCase();
    }
    return choice.toLowerCase();
}

console.log(getComputerChoice())
console.log(getHumanChoice())