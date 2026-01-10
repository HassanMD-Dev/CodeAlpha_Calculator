const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");
const icon = document.querySelector(".fa-backspace");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.textContent;
    if (value === "C") {
      display.value = "";
    } else if (value === "=") {
      try {
        display.value = eval(display.value);
      } catch {
        display.value = "ERROR";
      }
    } else if (value === icon.textContent) {
      display.value = display.value.slice(0, -1);
    } else {
      display.value += value;
    }
  });
});

document.addEventListener("keydown", (e) => {
  const key = e.key;
  if ((e.key >= "0" && e.key <= "9") || ["+", "-", "*", "/"].includes(e.key)) {
    display.value += key;
  } else if (key === "Enter") {
    try {
      display.value = eval(display.value);
    } catch (error) {
      display.value = "ERROR";
    }
  } else if (key === "Backspace") {
    display.value = display.value.slice(0, -1);
  } else if (key === "Escape" || key === "C") {
    display.value = "";
  }
});
