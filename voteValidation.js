// Validation for Vote
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
