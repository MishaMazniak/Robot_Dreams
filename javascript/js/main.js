let firstValue = prompt("Enter your first value");
let secondValue = prompt("Enter your second value");
let controlZero;
let controlNegative;
let inputEmpti;

if (firstValue === "" || secondValue === "") {
  inputEmpti = alert("Error, not have data");
} else {
  if (secondValue != 0) controlZero = firstValue / secondValue;
  else {
    alert("Error, secondValue is can't be zero");
    controlZero = "Error";
  }
  if (firstValue < secondValue) {
    controlNegative = confirm(
      "The first value is less on the second, do you want to continue?"
    );
    if (controlNegative) {
      controlNegative = firstValue - secondValue;
    } else controlNegative = "";
  } else controlNegative = firstValue - secondValue;

  let sum = +firstValue + +secondValue;
  let mult = firstValue * secondValue;

  console.log("firstValue - " + firstValue + "    secondValue - " + secondValue);
  console.log(sum);
  console.log(controlNegative);
  console.log(mult);
  console.log(controlZero);
}
