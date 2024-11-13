// TEMPERATURE CONVERSION PROGRAM

const textBox = document.getElementById("textBox");
const toFarenheit = document.getElementById("toFarenheit");
const toCelcius = document.getElementById("toCelcius");
const result = document.getElementById("result");
const convertBtn = document.getElementById("convertBtn");
let temp;

function convert() {
    if (toFarenheit.checked) {
        temp = Number(textBox.value);
        temp = temp * 9 / 5 + 32;
        result.textContent = temp.toFixed(1) + "°F";

        // Fire-like gradient for temperatures greater than 77°F
        if (temp > 77) {
            document.body.style.backgroundColor = "#AA0000"; // Hot
        } else {
            document.body.style.backgroundColor = "#0000AA"; // Cold
        }
    } else if (toCelcius.checked) {
        temp = Number(textBox.value);
        temp = (temp - 32) * (5 / 9);
        result.textContent = temp.toFixed(1) + "°C";

        // Solid color background for temperatures greater than 30°C
        if (temp > 30) {
            document.body.style.backgroundColor = "#AA0000"; // Hot
        } else {
            document.body.style.backgroundColor = "#0000AA"; // Cold
        }
    } else {
        result.textContent = "Select a unit";
    }
}
