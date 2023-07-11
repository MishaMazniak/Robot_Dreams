let firstValue = prompt("Enter your first value")
let secondValue = prompt("Enter your second value")

let sum = parseInt(firstValue) + parseInt(secondValue)
let dif = firstValue - secondValue
let mult = firstValue * secondValue
let division = firstValue / secondValue

alert(
  "firstValue - " +
    firstValue +
    "    secondValue - " +
    secondValue +
    "      + =   " +
    sum +
    "      - =   " +
    dif +
    "      * =   " +
    mult +
    "       / =   " +
    division
)
console.log("firstValue - " + firstValue + "    secondValue - " + secondValue)
console.log(sum)
console.log(dif)
console.log(mult)
console.log(division)
