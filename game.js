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

function PlayGame(){
    let computerChoice=getComputerChoice();
    console.log(playRound(this.classList[0],computerChoice));
}
const choices=document.querySelectorAll('button');

choices.forEach(choice =>choice.addEventListener('click',PlayGame));

