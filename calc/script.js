let buttons = document.getElementsByTagName("button");//buttons are accessed
let result = document.getElementById("result");// result

for (let i = 0; i < buttons.length; i++) {
  buttons[i].onclick = function () {
    let input = buttons[i].innerText;
    updateDisplay(input);// onclicking button button value will display
  };
}

function updateDisplay(input) {// update value
  let currentDisplay = result.value;

  if (input == "C") {
    result.value = "0";
  } else if (input == "DEL") {
    result.value = currentDisplay.slice(0, -1) || "0"; // fallback to "0"
  } else if (input == "=") {
    try {
      result.value = eval(currentDisplay);
    } catch {
      result.value = "ERROR";
    }
  } else {
    if (currentDisplay == "0" || currentDisplay == "ERROR") {
      result.value = input;
    } else {
      result.value += input;
    }
  }
}
