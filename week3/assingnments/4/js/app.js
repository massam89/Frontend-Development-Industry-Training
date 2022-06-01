function computerPlay() {
    const options = ['Paper', 'Rock', 'Scissors']
    const randomNum = Math.floor(Math.random() * options.length)

    return options[randomNum]
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if((playerSelection === 'rock' && computerSelection === 'rock') || (playerSelection === 'scissors' && computerSelection === 'scissors') || (playerSelection === 'paper' && computerSelection === 'paper')) {
        return 'Draw'
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        return 'You lose! scissors beat paper'
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return 'You win! paper beat rock'
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        return 'You lose! paper beat rock'
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return 'You win! rock beat scissors'
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return 'You win! scissors beat paper'
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        return 'You lose! rock beat scissors'
    } else {
        return 'Wrong input'
    }

}

(function game() {
    let playerScore = 0;
    let computerScore = 0;

    for(let i = 0 ; i < 5 ; i++) {
        const playerSelection = prompt('Rock, scissors or paper?');
        const computerSelection = computerPlay();
        const roundMessage = playRound(playerSelection, computerSelection)

        console.log(roundMessage)

        if(roundMessage === 'Wrong input') {
            i--;
        } else if (roundMessage === 'Draw'){
            continue
        } else if (roundMessage.search('win') === -1) {
            computerScore++
        } else if (roundMessage.search('lose') === -1){
            playerScore++
        }
    }

    console.log({playerScore, computerScore})

    if(playerScore > computerScore){
        console.log('You Win')
        alert('You Win')
    } else if (playerScore < computerScore){
        console.log('You Lose')
        alert('You Lose')
    } else {
        console.log('Draw')
        alert('Draw')
    }

    if(confirm('Do you want to play again?')){
        game()
    }
    
})();