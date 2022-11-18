let male = "Men";
let female = "Women";
let other = "Gay";
console.log(male, female, other);
let userName = prompt("Enter your name");
// userName Section Validations
userName = userName.trim()
if (userName.length == 0) {
    alert("Please Fill Your Name");
}
else {
    if (isNaN(userName)) {
        if (!userName.match(/^[a-zA-Z]+ [a-zA-Z]+$/)) {
            alert("Name Must Have First and Last Name");
        }
        else {
            // userAge Validations
            let userAge = prompt("Enter Your  Age ");
            userAge = userAge.trim();
            if (userAge.length == 0) {
                alert("Please enter your Age ");
            }
            else {
                if (isNaN(userAge)) {
                    alert("Age Must be a number");
                }
                else {
                    if (userAge >= 18) {
                        // document.write(ageValue + userAge);
                        // userGender Validations
                        let userGender = prompt("Enter your genderValue");
                        userGender = userGender.trim();
                        if (userGender.length == 0) {
                            alert("Please Enter your gender");
                        }
                        else {
                            if (isNaN(userGender)) {
                                if ((userGender == "Male") || (userGender == "male")) {
                                    document.write(`Hello ${userName} , Welcome To Our Clan,You Meet Our Required Validation! Your Are ${userAge} Years Old, And That is Enough For Us, You Are Under ${male} Category So You Have To Play Boys Role!`);
                                }
                                else {

                                    if ((userGender == "Female") || (userGender == "female")) {
                                        document.write(`Hello ${userName} , Welcome To Our Clan,You Meet Our Required Validation! Your Are ${userAge} Years Old, And That is Enough For Us, You Are Under ${female} Category So You Have To Play Girls Role!`);

                                    }
                                    else {
                                        if ((userGender == "other") || (userGender == "Other")) {
                                            document.write(`Hello ${userName} , Welcome To Our Clan,You Meet Our Required Validation! Your Are ${userAge} Years Old, And That is Enough For Us, You Are Under ${other} Category So You Have To Play Gay Role!`);

                                        }
                                        else {
                                            alert("Out Of Gender");

                                        }
                                    }

                                }

                            }
                            else {
                                alert("Gender Should Be Male or Female or Other");
                            }


                        }
                    }
                    else {
                        alert("You Must Be 18 Years Old");
                    }
                }
            }
        }
    }
    else {
        alert("Name Should Not Contain Numbers");

    }
}
