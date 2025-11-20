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

let numbers = document.querySelectorAll(".number");
let display = document.querySelector(".display");
let clear = document.querySelector("#clear");
let operators = document.querySelectorAll(".operator");
let equal = document.querySelector("#equal");
let operation;
let operationSymbol;
let numString = "";

for (let number of numbers) {
  number.addEventListener("click", () => {
    numString += number.textContent;
    display.textContent += number.textContent;
  })
}

for (let operator of operators) {
  operator.addEventListener("click", () => {
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
    numString += operator.textContent;
    display.textContent += operator.textContent;
  })
}

equal.addEventListener("click", () => {
  display.textContent = "";
  let numStringSplit = numString.split(operationSymbol);
  let num1 = numStringSplit[0];
  let num2 = numStringSplit[1];
  display.textContent = operation(+num1, +num2);
})

clear.addEventListener("click", () => {
  display.textContent = "";
  numString = "";
})