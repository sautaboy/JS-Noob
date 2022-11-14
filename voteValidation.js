 // Vote Validation
    
    let age = + prompt("Enter Your  Age")
    if (isNaN(age) || age === "") {
        console.log("SomeThing went Wrong!")
    }
    else {
        if (age <= 0) {
            console.log("Out Of Age")
        }
        else {
            if (age > 0 && age < 18) {
                console.log("You Cannot Vote")
            }
            else {
                if (age == 18 || age <= 110) {
                    console.log("You Can Vote")
                }
                else {
                    if (age > 110) {
                        console.log("You Are Dead Mother Fucker")
                    }
                }
            }
        }
    }
