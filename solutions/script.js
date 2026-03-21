/*
  STEP 1: SELECT YOUR ELEMENTS FROM THE DOM
  You need to grab each part of the calculator from the HTML.
  The first one is done for you as an example!
*/

const screen = document.getElementById("calcScreen");

// Grab all buttons with class "num" using querySelectorAll
const numberButtons = document.querySelectorAll(".num");

// Grab all buttons with class "sign" using querySelectorAll
const opButtons = document.querySelectorAll(".sign");

// Grab the ONE element with class "signEqual" using querySelector
const equalButton = document.querySelector(".signEqual");

// Grab the element with id "clearButton"
const clearButton = document.getElementById("clearButton");

// Grab the element with id "deleteButton"
const deleteButton = document.getElementById("deleteButton");


/*
  STEP 2: STATE VARIABLES
  These keep track of what the user is doing.

  currentValue  → the number currently showing on screen
  previousValue → the first number (saved before an operator is clicked)
  currentOperator → which operator the user clicked (+, -, *, /)
*/

let currentValue = "0";
let previousValue = "";
let currentOperator = null;


/*
  STEP 3: updateScreen()
  This function's only job: show currentValue on the screen.
  Hint: use textContent on the screen element
*/

function updateScreen() {
  screen.textContent = currentValue;
}


/* 
  STEP 4: handleNumberClick(digit)
  This runs every time a number button is clicked.
  It receives one argument: digit (the number that was clicked)

  Logic:
  - If currentValue is "0", replace it with the new digit
  - Otherwise, add the digit to the END of currentValue
  - Call updateScreen() at the end
*/

function handleNumberClick(digit) {
  if (currentValue === "0") {
    currentValue = digit;
  } else {
    currentValue += digit;
  }
  updateScreen();
}


/*
  STEP 5: handleOperatorClick(operator)
  This runs when the user clicks +, -, *, or /
  It receives one argument: operator (the symbol clicked)

  Logic:
  - If we already have a previous value and operator, calculate current results first.
  - Save currentValue into previousValue
  - Save the operator into currentOperator
  - Reset currentValue back to "0" so user can type the second number
*/

function handleOperatorClick(operator) {
  if (previousValue !== "" && currentOperator !== null) {
    performCalculation();
  }

  previousValue = currentValue;
  currentOperator = operator;
  currentValue = "0";
}


/*
  STEP 6: performCalculation()
  This runs when the user hits =
  No arguments — it uses previousValue, currentValue, currentOperator

  Logic:
  - Convert previousValue and currentValue to numbers
  - Based on the operator, perform the calculation
  - Handle divide-by-zero case
  - Convert the result back to a string
  - Reset previousValue and currentOperator
  - Update the screen with the result
*/

function performCalculation() {
  const first = parseFloat(previousValue);
  const second = parseFloat(currentValue);
  let result;

  if (currentOperator === "+") {
    result = first + second;
  } else if (currentOperator === "-") {
    result = first - second;
  } else if (currentOperator === "*") {
    result = first * second;
  } else if (currentOperator === "/") {
    result = second === 0 ? "Error" : first / second;
  } else {
    return;
  }

  currentValue = String(result);
  previousValue = "";
  currentOperator = null;
  updateScreen();
}


/*
  STEP 7: ADD EVENT LISTENERS - Connect all your buttons to your functions!
*/

// Number buttons
numberButtons.forEach(function (btn) {
  btn.addEventListener("click", function () {
    const digit = btn.textContent;
    handleNumberClick(digit);
  });
});

// Operator buttons (+, -, *, /, and .)
opButtons.forEach(function (btn) {
  btn.addEventListener("click", function () {
    const value = btn.textContent;

    // Handle decimal point — only add if not already present
    if (value === ".") {
      if (!currentValue.includes(".")) {
        currentValue += ".";
        updateScreen();
      }
      return;
    }

    handleOperatorClick(value);
  });
});

// Equals button (=)
equalButton.addEventListener("click", function () {
  if (previousValue !== "" && currentOperator !== null) {
    performCalculation();
  }
});

// Clear button (C)
clearButton.addEventListener("click", function () {
  currentValue = "0";
  previousValue = "";
  currentOperator = null;
  updateScreen();
});

// Delete button (⌫)
deleteButton.addEventListener("click", function () {
  if (currentValue.length === 1) {
    currentValue = "0";
  } else {
    currentValue = currentValue.slice(0, -1);
  }
  updateScreen();
});
