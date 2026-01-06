//hello how r u R u fine let me know if u have any queries dont feel hesitate just feel free to contact
const display = document.getElementById("display");

function append(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
  }
}

// BONUS: Keyboard support
document.addEventListener("keydown", (e) => {
  const key = e.key;
  if ("0123456789+-*/.".includes(key)) {
    append(key);
  } else if (key === "Enter") {
    calculate();
  } else if (key === "Backspace") {
    display.value = display.value.slice(0, -1);
  } else if (key.toLowerCase() === "c") {
    clearDisplay();
  }
});
