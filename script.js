function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

function operate(operator, num1, num2) {
  return operator(num1, num2);
}

function evaluateString(string) {
  let stringArr = string.split(operationSymbol);
  let num1 = stringArr[0];
  let num2 = stringArr[1];
  let result = operation(+num1, +num2).toString();
  return result;
}

function checkIfTwoNums(string) {
  if (string.split(operationSymbol).filter((item) => item !== "").length === 2) {
    return true;
  }
  return false;
}

function clearDisplay() {
  display.textContent = "";
}

function updateDisplay(string) {
  if (string == "Infinity") {
    display.textContent = "NICE TRY BUDDY!";
    numString = "";
  } else {
    display.textContent += string;
  }
}

let numbers = document.querySelectorAll(".number");
let display = document.querySelector(".display");
let clear = document.querySelector("#clear");
let operators = document.querySelectorAll(".operator");
let equal = document.querySelector("#equal");
let operation;
let operationSymbol = "";
let numString = "";
const validOperators = ["+", "-", "*", "/"];

for (let number of numbers) {
  number.addEventListener("click", () => {
    numString += number.textContent;
    updateDisplay(number.textContent);
  })
}

for (let operator of operators) {
  operator.addEventListener("click", () => {
    if (operationSymbol !== "" && checkIfTwoNums(numString)) {
      numString = evaluateString(numString);
      clearDisplay();
      updateDisplay(numString);
    }
    if (operator.id === "add") {
      operation = add;
    } else if (operator.id === "subtract") {
      operation = subtract;
    } else if (operator.id === "multiply") {
      operation = multiply;
    } else if (operator.id === "divide") {
      operation = divide;
    }
    operationSymbol = operator.textContent;
    if (validOperators.includes(numString.at(-1))) {
      numString = numString.replace(numString.at(-1), operationSymbol);
      clearDisplay();
      updateDisplay(numString);
    } else {
      numString += operator.textContent;
      updateDisplay(operator.textContent);
    }
  })
}

equal.addEventListener("click", () => {
  if (checkIfTwoNums(numString)) {
    clearDisplay();
    updateDisplay(evaluateString(numString));
  }
})

clear.addEventListener("click", () => {
  clearDisplay();
  numString = "";
})