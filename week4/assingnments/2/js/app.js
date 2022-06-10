// Return Random memeber between three option, paper-rock-scissors
const computerPlay = () => ['Paper', 'Rock', 'Scissors'][Math.floor(Math.random() * 3)]

// Run each round between PC and User and return the result
const playRound = (playerSelection) => {
    playerSelection = playerSelection.toLowerCase();
    let computerSelection = computerPlay().toLowerCase();

    if( playerSelection === computerSelection ) {
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

// Main function, execute at first 
const game = (() => {
    const buttons = document.querySelectorAll('button')
    const resultTextEl = document.querySelector('p')

    let playerScore = 0
    let computerScore = 0

    // Add listener to each button
    buttons.forEach( button => {
        button.addEventListener('click', (e) => {
            const playRoundText = playRound(e.target.innerText);

            // Calculate player and computer score
            if (playRoundText.includes('win')) playerScore++   
            else if (playRoundText.includes('lose')) computerScore++
            
            // Show results
            if (playerScore === 5){
                resultTextEl.innerHTML = 'You Win!'
                playerScore = 0
                computerScore = 0
            } else if (computerScore === 5) {
                resultTextEl.innerHTML = 'You Lose!'
                playerScore = 0
                computerScore = 0
            } else {
                resultTextEl.innerHTML = `${playRoundText}<br>Player: ${playerScore}<br>computer: ${computerScore}`
            }        
        })
    })   
})();