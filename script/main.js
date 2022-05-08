// --------- Calculator ----------
let display = document.getElementById("display");

function getValue(e) {
    let inputNum = e.textContent;
    if (inputNum == "=") {
        display.textContent = eval(display.textContent).toFixed(1);
    }else if (inputNum == "AC") {
        display.textContent = "0";
    }else if (inputNum == "C") {
        display.textContent = display.textContent.slice(0, -1);
    }else {
        if (display.textContent == "0") {
            display.textContent = inputNum;
        }
        else {
            display.textContent += inputNum;
        }
    } 
}