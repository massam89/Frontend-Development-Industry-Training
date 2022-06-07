function computerPlay() {
    const options = ['Paper', 'Rock', 'Scissors']
    const randomNum = Math.floor(Math.random() * options.length)

    return options[randomNum]
}

function playRound(playerSelection) {

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

(function game() {
    const buttons = document.querySelectorAll('button')
    const resultText = document.querySelector('p')

    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            resultText.textContent = playRound(e.target.innerText)
        })
    })

    
})();

