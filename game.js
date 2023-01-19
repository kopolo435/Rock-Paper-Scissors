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
            return "You Lose! Paper beats Rock"
        }
        else{
            return "You Win! Rock beats Scissors"
        }
        
    }
    else if(playerSelection=="paper")
    {
        if(computerSelection=="rock")
        {
            return "You Win! Paper beats Rock"
        }
        else{
            return "You Lose! Scissors beats Paper"
        }
    }
    else if(playerSelection=="scissors"){
        if(computerSelection=="paper")
        {
            return"You Win! Scissors beats paper"
        }
        else{
            return "You Lose! Rock beats Scissors"
        }
    }
    else{
        return"Error! your input is wrong"
    }



}

