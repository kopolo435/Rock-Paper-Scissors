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
        return `You choose ${playerSelection} and the computer ${computerSelection} Draw!`
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

function PlayGame(choice){
    let computerChoice=getComputerChoice();
    let resultText=playRound(choice.classList[0],computerChoice)
    result.textContent=resultText; //Accesa a una variable global para poder devolver el resultado
    resultText.includes('Win') ? userWin+=1 : !resultText.includes('Draw') ? computerWin+=1: '' ;

}

const choices=document.querySelectorAll('button');
const result=document.querySelector('.result');
let gameCount=0;
let userWin=0;
let computerWin=0;



choices.forEach(choice => choice.addEventListener('click',()=>{
    gameCount+=1;
    PlayGame(choice);
    console.log(gameCount);
    if((userWin+computerWin)===5){
        console.log("Game over");
        console.log(`user wins= ${userWin}`);
        console.log(`computer wins= ${computerWin}`);
    };
    
}));





