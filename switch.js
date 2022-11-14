
let price = prompt("What Do You Want", "'pencil-erasor-calculator-tipex-copy-sharpner")
switch (price) {
    case "Pen", "pen", "pens", "Pens":
        let PenQty = 5
        let totalPen
        totalPen = prompt("Enter The Quantity")
        console.log(`Your Total Price is:${PenQty * totalPen}`)
        break;
    case "Pencil", "pencil":
        let pencilQty = 10
        let totalPencil
        totalPencil = prompt("Enter The Quantity")
        console.log(`Your Total Price is:${pencilQty * totalPencil}`)
        break;
    case "Eraser", "erasor":
        let erasorQty = 10
        let totalErasor
        totalErasor = prompt("Enter The Quantity")
        console.log(`Your Total Price is:${erasorQty * totalErasor}`)
        break;
    case "Copy", "copy":
        let copyQty = 100
        let totalCopy
        totalCopy = prompt("Enter The Quantity")
        console.log(`Your Total Price is:${copyQty * totalCopy}`)
        break;
    case "Sharpner", "sharpner":
        let sharpnerQty = 10
        let totalSharpner
        totalSharpner = prompt("Enter The Quantity")
        console.log(`Your Total Price is:${sharpnerQty * totalSharpner}`)
        break;
    case "Tipex", "tipex":
        let tipexQty = 60
        let totalTipex
        totalTipex = prompt("Enter The Quantity")
        console.log(`Your Total Price is:${tipexQty * totalTipex}`)
        break;
    case "Calculator", "calculator":
        let calculatorQty = 300
        let totalCalculator
        totalCalculator = prompt("Enter The Quantity")
        console.log(`Your Total Price is:${calculatorQty * totalCalculator}`)
        break;
    default:
        console.log("Out Of Stock")
}
