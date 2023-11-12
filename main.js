const display = document.querySelector("#display h1");

const numberButton = document.querySelectorAll(".number-button");

const operatorButton = document.querySelectorAll(".operator-button");
const equalButton = document.querySelector("#equal-button");
const clearButton = document.querySelector("#clear-button");

let first;
let second;

// Here I clear the display and return the first and second valures to undefined.
function clearDisplay() {
  display.textContent = "0";
  first = undefined;
  second = undefined;
}

function operate(operator, firstOperand, secondOperand) {
  switch (operator) {
    case "+":
      return firstOperand + secondOperand;
    case "-":
      return firstOperand - secondOperand;
    case "*":
      return firstOperand * secondOperand;
    case "/":
      return firstOperand / secondOperand;
  }
}

function printNumber(button) {
  if (display.textContent === "0") {
    if (button.textContent !== "0") {
      display.textContent = button.textContent;
    }
  } else {
    display.textContent += button.textContent;
  }
}

numberButton.forEach(function (button) {
  button.addEventListener("click", (e) => {
    printNumber(e.target);
  });
});

clearButton.addEventListener("click", () => clearDisplay());

if (first) {
  console.log(first);
} else {
  console.log("no hay valor");
}
