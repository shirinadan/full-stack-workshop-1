// DOM REFERENCES
const title = document.getElementById("title");
const subtitle = document.getElementById("subtitle");
const nameInput = document.getElementById("nameInput");
const output = document.getElementById("output");
const statusText = document.getElementById("statusText");
const colorOutput = document.getElementById("colorOutput");
const calcResult = document.getElementById("calcResult");
const clickCounter = document.getElementById("clickCounter");
const calcOp = document.getElementById("calcOp");

const greetBtn = document.getElementById("greetBtn");
const clearBtn = document.getElementById("clearBtn");
const changeTitleBtn = document.getElementById("changeTitleBtn");
const toggleThemeBtn = document.getElementById("toggleThemeBtn");
const countBtn = document.getElementById("countBtn");
const uppercaseBtn = document.getElementById("uppercaseBtn");
const reverseBtn = document.getElementById("reverseBtn");
const clearInputBtn = document.getElementById("clearInputBtn");
const statusBtn = document.getElementById("statusBtn");
const resetBtn = document.getElementById("resetBtn");
const addBtn = document.getElementById("addBtn");
const subtractBtn = document.getElementById("subtractBtn");
const multiplyBtn = document.getElementById("multiplyBtn");
const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");

const switchRed = document.getElementById("switchRed");
const switchBlue = document.getElementById("switchBlue");
const switchGreen = document.getElementById("switchGreen");
const switchPurple = document.getElementById("switchPurple");
const switchOrange = document.getElementById("switchOrange");

// STARTER EXAMPLES

// Helper: trim whitespace from a name
const formatName = (name) => name.trim();

// Greet button — already working as a starter example
greetBtn.addEventListener("click", () => {
  const name = formatName(nameInput.value) || "World";
  output.textContent = `Hello, ${name}!`;
});

// Clear output button — already working as a starter example
clearBtn.addEventListener("click", () => {
  output.textContent = "Output will appear here.";
});

// ── TASKS: code below this line ────────────────────────────
