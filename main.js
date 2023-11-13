const display = document.querySelector("#display h1");

const numberButton = document.querySelectorAll(".number-button");

const operatorButton = document.querySelectorAll(".operator-button");
const equalButton = document.querySelector("#equal-button");
const clearButton = document.querySelector("#clear-button");

let first;
let equal = false;
let operator;

// Here I clear the display and return the first and second valures to undefined.
function clearDisplay() {
  display.textContent = "0";
  first = undefined;
  second = false;
  operator = undefined;
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

function printNumber(content) {
  if (display.textContent === "0" || operator || equal) {
    display.textContent = content;
  } else {
    display.textContent += content;
  }
}

numberButton.forEach(function (button) {
  button.addEventListener("click", (e) => {
    printNumber(e.target.textContent);
  });
});

clearButton.addEventListener("click", () => clearDisplay());

// After the operator button is called, the current displayed number has to be stored in first.
operatorButton.forEach(function (button) {
  button.addEventListener("click", (e) => {
    if (operator) {
      display.textContent = operate(
        operator,
        first,
        Number(display.textContent)
      );
      first = Number(display.textContent);
    } else {
      first = Number(display.textContent);
    }
    operator = e.target.textContent;
  });
});

equalButton.addEventListener("click", () => {
  if (first && operator) {
    display.textContent = operate(operator, first, Number(display.textContent));
    first = undefined;
    operator = undefined;
    equal = true;
  }
});
// The operator has to be displayed and stored to operator.
// After the second number, a new operator or the equal operator should display the result of the previous operation.
// The result has to be first now and second has to be undefined.
