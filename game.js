function getComputerChoice(){
    switch(Math.floor(Math.random()*3))
    {
        case 0:
            return 'Rock'
        case 1:
            return 'Paper'
        case 2:
            return 'Scissors'
    }
}

function playRound(playerSelection,computerSelection){
    playerSelection= playerSelection.toLowerCase();
    computerSelection= computerSelection.toLowerCase();
    
    if(playerSelection==computerSelection){
        return `Draw! you choose ${playerSelection} and the computer ${computerSelection} `
    }
    else if(playerSelection=="rock")
    {
        if(computerSelection=="paper")
        {
            return `You choose ${playerSelection} and the computer ${computerSelection}. You Lose!`
        }
        else{
            return `you choose ${playerSelection} and the computer ${computerSelection}. You Win!`
        }
        
    }
    else if(playerSelection=="paper")
    {
        if(computerSelection=="rock")
        {
            return `You choose ${playerSelection} and the computer ${computerSelection}. You Win!`
        }
        else{
            return `You choose ${playerSelection} and the computer ${computerSelection}. You Lose!`
        }
    }
    else if(playerSelection=="scissors"){
        if(computerSelection=="paper")
        {
            return`You choose ${playerSelection} and the computer ${computerSelection}. You Win!`
        }
        else{
            return `you choose ${playerSelection} and the computer ${computerSelection}. You Lose!`
        }
    }
    else{
        return"Error! your input is wrong"
    }



}

function game(){
    for(let i=0;i<5;i++)
    {
        playerSelection=prompt("Enter rock,paper or scissors to play");
        computerSelection=getComputerChoice();
        console.log(playRound(playerSelection,computerSelection));

    }
}

game();