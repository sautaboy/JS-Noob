<!-- <Script>
    const yourName = prompt("Enter Your Name")
    setTimeout(() => {
        const age = prompt("What is Your Age?")
        console.log(yourName + age + gender)
    }, 3000)
    const gender = prompt("Enter Your Gender")
</Script> -->


<!-- Set Interval -->
<style>
    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    #start {
        position: fixed;
        top: 40%;
        left: 50%;
        padding: 1rem;
        width: 15rem;
    }
</style>

<body>
    <button id="start">Click For Color Code</button>

    <script>
        const body = document.body
        const startButton = document.querySelector('#start')
        const setTimeOut = setInterval(() => {
            const red = Math.floor(Math.random() * 256)
            const green = Math.floor(Math.random() * 256)
            const blue = Math.floor(Math.random() * 256)
            const randomColor = (`rgb(${red},${green},${blue})`)
            body.style.backgroundColor = randomColor
        }, 1000)
        startButton.addEventListener('click', () => {
            const color = body.style.backgroundColor
            clearInterval(setTimeOut)
            startButton.textContent = color
        })


    </script>
</body>
