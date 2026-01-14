const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");
const operators = ["+", "-", "*", "/"];

function calculate() {
  try {
    display.value = math.evaluate(display.value);
  } catch {
    display.value = "Invalid Expression";
  }
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.textContent;
    const action = button.dataset.action;
    const lastChar = display.value.slice(-1);

    if (display.value === "Invalid Expression") display.value = "";

    if (value === "C") {
      display.value = "";
    } else if (value === "=") {
      calculate();
    } else if (action === "backspace") {
      display.value = display.value.slice(0, -1);
    } else {
      if (operators.includes(value) && operators.includes(lastChar)) return;
      if (value === "." && display.value.split(/[\+\-\*\/]/).pop().includes(".")) return;
      display.value += value;
    }
  });
});

document.addEventListener("keydown", (e) => {
  const key = e.key;
  const lastChar = display.value.slice(-1);

  if (/[\d+\-*/.]/.test(key)) {
    e.preventDefault();
    if (operators.includes(key) && operators.includes(lastChar)) return;
    display.value += key;
  } else if (key === "Enter") {
    e.preventDefault();
    calculate();
  } else if (key === "Backspace") {
    e.preventDefault();
    display.value = display.value.slice(0, -1);
  } else if (key === "Escape" || key.toUpperCase() === "C") {
    e.preventDefault();
    display.value = "";
  }
});
