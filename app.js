const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");
const action = button.dataset.action;

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.textContent;
    if (value === "C") {
      display.value = "";
    } else if (value === "=") {
      try {
        display.value = math.evaluate(display.value);
      } catch {
        display.value = "Invalid Expression";
      }
    } else if (action === "Backspace") {
      display.value = display.value.slice(0, -1);
    } else {
      display.value += value;
    }
  });
});

document.addEventListener("keydown", (e) => {
  const key = e.key;
  if ((e.key >= "0" && e.key <= "9") || ["+", "-", "*", "/"].includes(e.key)) {
    e.preventDefault();
    display.value += key;
  } else if (key === "Enter") {
    try {
      e.preventDefault();
      display.value = math.evaluate(display.value);
    } catch (error) {
      display.value = "Invalid Expression";
    }
  } else if (key === "Backspace") {
    e.preventDefault();
    display.value = display.value.slice(0, -1);
  } else if (key === "Escape" || key.toUpperCase() === "C") {
    e.preventDefault();
    display.value = "";
  }
});
