// Validation for Vote

    let age = prompt("Enter Your Age")
    age = age.trim()
    if (age.trim() == 0) {
        console.log("Please Fill The Age ")
    }
    else {
        if (isNaN(age)) {
            console.log("Age Must Be in Valid  Number")
        }
        else {
            age=+age. //This Will Change The Data Type Of Enterd String Value To Number;
            if (age <= 0) {
                console.log("Invalid Age")
            }
            else {
                if (age > 0 && age < 18) {
                    console.log("You Cannot Vote")
                }
                else {
                    if (age == 18 || (age > 18 && age <= 110)) {
                        console.log("You Can Vote")
                    }
                    else {
                        if (age > 110) {
                            console.log("You are Dead Mother Fucker")
                        }
                        else {
                            console.log("Something Went Wrong, Please Re-Enter Your Age.")
                        }
                    }
                }
            }
        }
    }

