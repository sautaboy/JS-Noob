// This Will Keep The Records Inn console , well Teh USer Is Verified Or Not

let userName = prompt("Enter Your Full Name")
    let promise = new Promise((resolve, reject) => {
        if (!userName.match(/^[a-zA-Z]+ [a-zA-Z]+$/)) {
            reject(alert("Invalid Name"))
        }
        else {
            let age = prompt("Enter Your Age")
            if ((age < 18) || (age > 110) || (isNaN(age))) {
                reject(alert("Invalid Age"))
            }
            else {
                resolve()
            }
        }
    })
    promise.then(() => {
        console.log("Person Is Varyiied")
    })
    promise.catch(() => {
        console.log("Peroson Is Not Varified")
    })
