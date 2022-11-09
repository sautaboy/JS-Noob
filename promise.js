let marks = prompt("Enter Your Marks")
    let p = new Promise((resolve, reject) => {
        alert("Please Wait For Your Result")
        if (marks < 40) {
            setTimeout(() => {
                resolve("You are not Selected")
            }, 6000);
        }
        else {
            reject("You are Selected")
        }

    })
    p.then(alert).catch(alert)
