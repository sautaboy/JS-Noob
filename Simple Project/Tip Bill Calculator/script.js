let billAmount = document.getElementById("billAmount")
let tipAmount = document.getElementById("tipAmount")
let plusButton = document.getElementById("plus")
let minusButton = document.getElementById("minus")
let totalAmountPerPerson = document.getElementById("totalBill")
let numberOfPeopleInHtml = document.getElementById("numberOfPeople")
let clear = document.getElementById("clear")

let numberOfPeople = Number(numberOfPeopleInHtml.innerText)



// suming the Total bill amount and tipPercentage
const finalAmount = () => {

    let totalAmount = (Number(tipAmount.value) + Number(billAmount.value)) / Number(numberOfPeople)
    // totalAmountPerPerson.innerText = totalAmount.toFixed(2);
    return totalAmount
}
// console.log(totalAmount)

// making the amount equal to the number of people
plusButton.onclick = () => {
    numberOfPeople += 1
    numberOfPeopleInHtml.innerText = numberOfPeople
    totalAmountPerPerson.innerText = finalAmount().toFixed(2)
}
minusButton.onclick = () => {
    {
        if (numberOfPeople <= 1)
            throw "Less Than  People is Not  Possible !"
    }
    numberOfPeople -= 1
    numberOfPeopleInHtml.innerText = numberOfPeople
    totalAmountPerPerson.innerText = finalAmount().toFixed(2)

}
billAmount.onkeyup = () => {
    // console.log("hello")
    // finalAmount()
    totalAmountPerPerson.innerText = finalAmount().toFixed(2)

}
tipAmount.onkeyup = () => {
    totalAmountPerPerson.innerText = finalAmount().toFixed(2)
}


// clearing The PLAce Holder To Emply
clear.onclick = () => {
    // body.placeholder.value = ""
    // billAmount.placeholder = ""a
    // alert("hello")/
    billAmount.value = ""
    tipAmount.value = ""
    numberOfPeopleInHtml.innerText = 1
    totalAmountPerPerson.innerText = "0.00"
    finalAmount()

}



