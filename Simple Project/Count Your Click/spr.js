
// lets create the  color with (RGB(code))
// this is the function to generate the random RGB color
const rgbColor = () => {
    const red = Math.floor(Math.random() * 255)
    const green = Math.floor(Math.random() * 255)
    const blue = Math.floor(Math.random() * 255)
    return (`rgb(${red},${green},${blue})`)
}




const squares = document.querySelectorAll(".colorSquare")
const timesClicked = {
    'red': 0,
    'green': 0,
    'blue': 0,

}
// console.log(squares[0])
// for Each for repeating the things

// this for each method is used to print out all the square value once
squares.forEach(square => {
    square.onclick = () => {
        square.style.backgroundColor = rgbColor()
        // this method is used to give the squaree value when clicked
        timesClicked[square.value] += 1
        square.innerText = timesClicked[square.value]

    }
})

// clearing the tap score by using clear Button
const clearButton = document.getElementById("clearButton")

function clearScore() {
    timesClicked.red = 0
    timesClicked.green = 0
    timesClicked.blue = 0
    squares.forEach(square => {
        square.innerText = ''
    })
}

clearButton.onclick = () => {
    clearScore()
}












