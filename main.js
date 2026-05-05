let humanScore = 0;
let computerScore = 0; 

const rockBtn = document.querySelector("#rock")
const paperBtn = document.querySelector("#paper")
const scissorsBtn = document.querySelector("#scissors")

const display = document.querySelector("#display")


function playRound(humanChoice) {
    if (humanScore === 5 || computerScore === 5) {
        return; 
    }
    
    //check to see first to make sure that the playround function doesnt run again if either has a score of 5
    let computerChoice = ""
    let message = ""
    
    let num = Math.floor(Math.random() * 3)
    
    if (num === 0) {
        computerChoice = "rock"
    } else if (num === 1) {
        computerChoice = "paper"
    } else {
        computerChoice = "scissors"
    }
    
    if (humanChoice === computerChoice) {
        message = `You chose ${humanChoice}, computer chose ${computerChoice}. Round result: Tie!`
    } else if ((humanChoice === "rock" && computerChoice === "scissors") ||
                (humanChoice === "paper" && computerChoice === "rock") ||
                (humanChoice === "scissors" && computerChoice === "paper")) {
                    message = `You chose ${humanChoice}, computer chose ${computerChoice}. Round result: You won!`
                    humanScore++
                }
    else {
        message = `You chose ${humanChoice}, computer chose ${computerChoice}. Round result: You lose, better luck next time!`
        computerScore++
    }
    
    if (humanScore === 5) {
        message += "You won the match"
        rockBtn.disabled = true;
        paperBtn.disabled = true;
        scissorsBtn.disabled = true;
    } else if (computerScore === 5) {
        message += "You lose the match, computer got the best of you."
        rockBtn.disabled = true;
        paperBtn.disabled = true;
        scissors.disabled = true;
    }
    
    display.textContent = message
}

rockBtn.addEventListener("click", function() {
    playRound("rock")
})

paperBtn.addEventListener("click", function() {
    playRound("paper")
})

scissorsBtn.addEventListener("click", function() {
    playRound("scissors")
})
