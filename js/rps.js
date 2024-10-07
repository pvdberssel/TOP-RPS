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

console.log(getComputerChoice())