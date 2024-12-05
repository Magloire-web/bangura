var display = document.querySelector(".display");
var buttons = document.querySelectorAll("button");
var specialChars = ["%", "*", "/", "-", "+", "="];
var output = "";
var calculate = function (btnValue) {
    if (btnValue === "=" && btnValue !== "") {
        output = eval(output.replace("%", "/100"));
    }
    else if (btnValue === "AC") {
        output = "";
    }
    else if (btnValue === "DEL") {
        output = output.toString().slice(0, -1);
    }
    else {
        if (output === "" && specialChars.includes(btnValue))
            return;
        output += btnValue;
    }
    display.value = output;
};
buttons.forEach(function (button) {
    button.addEventListener("click", function (e) { return calculate(e.target.dataset.value); });
});
