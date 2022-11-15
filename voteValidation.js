<!-- <script>
    let ge = prompt("Enter Your Age");
    let realAge = realAge.trim()
    if (realAge === "" || realAge.length === 0) {
        // user pressed OK, but the input field was empty
        alert("Pleae, Fill Your Age.!")
    } else if (realAge) {
        if (isNaN(realAge)) {
            console.log("Age Should Be In  Number")
        }
        else {
            if (realAge < 0) {
                console.log("Invalid Age")
            }
            else {
                if (realAge >= 0 && realAge < 18) {
                    console.log("You Cannot Vote")
                }
                else {
                    if (realAge >= 18 || realAge <= 110) {
                        console.log("You Cannot Vote")
                    }
                    else {
                        if (realAge > 110) {
                            console.log("You Are Dead Mother Fucker")
                        }
                    }
                }
            }
        }
    } else {
        // user hit cancel
        alert("cancel")
    }
</script>

<!-- <script>
    let realAge = +prompt("Enter Your Age")
    if (realAge === null || realAge === "") {
        alert("Please, Fill Your Age...")
    }
    else if (realAge === 0) {
        alert("InSufficient Age!")
    }
    else if (realAge < 0) {
        alert("Invalid Age")
    }
    else if (realAge > 0 && realAge < 18) {
        alert("You Cannot Vote")
    }
    else if (realAge >= 18 && realAge <= 110) {
        alert("You Can Vote")
    }
    else if (isNaN(realAge)) {
        alert("Please, Fill Your Age In Number...")
    }
    else if (realAge > 110) {
        alert("You Are Dead Mother Fucker!")
    }
</script> --> -->

<script>
    let age = prompt("Enter Your Age")
    // console.log(typeof (+age))
    age = +age.trim()
    if (age.length == 0) {
        console.log("Please Fill The Age ")
    }
    else {
        if (isNaN(age)) {
            console.log("Age Must Be in Number")
        }
        else {
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
</script>
