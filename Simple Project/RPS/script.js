// creating a getComputerFunction
const getComputerOption = () => {
    const rpsOption = ["Scissors", "Paper", "Rock"];
    const randomNumber = Math.floor(Math.random() * rpsOption.length);
    const computerOption = rpsOption[randomNumber]
    return computerOption
}

// making condition
let score;
const getResult = (playerOption, computerOption) => {
    if (playerOption === computerOption) {
        score = 0;
    }
    else if (playerOption === "Scissors" && computerOption === "Paper") {
        return 1;
    }
    else if (playerOption === "Paper" && computerOption === "Rock") {
        return 1;
    }
    else if (playerOption === "Rock" && computerOption === "Scissors") {
        return 1;
    }
    else {
        score = -1;
    }
    return score;
}

// getting Dom
const playerChoosed = document.getElementById("playerOption")
const computerChoosed = document.getElementById("computerOption")
const winner = document.getElementById("winner")
//chnaging color Dom
const playerColor = document.querySelector(".playerColor")
const computerColor = document.querySelector(".computerColor")


// score
let playerScore = document.querySelector(".playerScore")
let computerScore = document.querySelector(".computerScore")
// playerScore = Number(playerScore.innerText)
// computerScore = Number(computerScore.innerText)


let player = 0
let computer = 0


const rpsButtonClicked = (playerOption, computerOption) => {
    const score = getResult(playerOption, computerOption)
    console.log(score)
    console.log(playerOption, computerOption)
    // udating the option in dom
    playerChoosed.innerText = playerOption
    computerChoosed.innerText = computerOption
    if (score < 0) {
        winner.innerText = computerOption
        winner.style.color = "green"
        player -= 1
        computer += 1
        playerScore.innerText = player
        computerScore.innerText = computer
        // chnanging option color
        playerColor.style.color = "red"
        computerColor.style.color = "green"

        // changing the score color
        playerScore.style.color = "red"
        computerScore.style.color = "green"

    }
    if (score == 0) {
        winner.innerText = "Tie"
        winner.style.color = "white"

        // chnanging option color
        playerColor.style.color = "white"
        computerColor.style.color = "white"

        player += 0
        computer += 0
        playerScore.innerText = player
        computerScore.innerText = computer
        // changing color
        playerScore.style.color = "white"
        computerScore.style.color = "white"
    }
    else if (score == 1) {
        winner.innerText = playerOption
        winner.style.color = "green"
        // chnanging option color
        playerColor.style.color = "green"
        computerColor.style.color = "red"

        player += 1
        computer -= 1
        playerScore.innerText = player
        computerScore.innerText = computer
        // changing color
        playerScore.style.color = "green"
        computerScore.style.color = "red"

    }

}

// getting clicked Function
const rpsButtons = document.querySelectorAll(".rpsButton")

const playeGame = () => {
    rpsButtons.forEach(button => {
        button.onclick = () => {
            return rpsButtonClicked(button.value, getComputerOption())
        }
    })
}
playeGame()

// ending the game
const stopButton = document.getElementById("stop")
stopButton.onclick = () => {
    playerScore.innerText = "00"
    computerScore.innerText = "00"
    playerScore.style.color = "black"
    computerScore.style.color = "black"
    playerColor.style.color = "black"
    computerColor.style.color = "black"
    winner.innerText = "Game Stoped"
    winner.style.color = "black"
}