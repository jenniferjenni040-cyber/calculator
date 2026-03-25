let currentInput = "";
let previousInput = "";
let operator = null;

function updateDisplay(value) {
  document.getElementById("display").innerText = value;
}

function appendNumber(num) {
  currentInput += num;
  updateDisplay(currentInput);
}

function appendDecimal() {
  if (!currentInput.includes(".")) {
    currentInput += ".";
    updateDisplay(currentInput);
  }
}

function chooseOperator(op) {
  if (currentInput === "") return;

  if (previousInput !== "") {
    calculate();
  }

  operator = op;
  previousInput = currentInput;
  currentInput = "";
}

function clearDisplay() {
  currentInput = "";
  previousInput = "";
  operator = null;
  updateDisplay("0");
}

function backspace() {
  currentInput = currentInput.slice(0, -1);
  updateDisplay(currentInput || "0");
}

function calculate() {
  if (previousInput === "" || currentInput === "") return;

  let result;

  let a = parseFloat(previousInput);
  let b = parseFloat(currentInput);

  if (operator === "+") result = a + b;
  if (operator === "-") result = a - b;
  if (operator === "*") result = a * b;
  if (operator === "/") {
    if (b === 0) {
      alert("Nice try 😏 Cannot divide by 0");
      clearDisplay();
      return;
    }
    result = a / b;
  }

  result = Math.round(result * 1000) / 1000;

  currentInput = result.toString();
  operator = null;
  previousInput = "";

  updateDisplay(currentInput);
}
