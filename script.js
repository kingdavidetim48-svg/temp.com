const textBox = document.getElementById("textBox");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelsius = document.getElementById("toCelsius");
const toKelvin = document.getElementById("toKelvin");
const kelvinToCelsius = document.getElementById("kelvinToCelsius");
const celsiusToKelvin = document.getElementById("celsiusToKelvin");
const kelvintoFahrenheit = document.getElementById("kelvintoFahrenheit");
const result = document.getElementById("result");
const submitBtn = document.getElementById("submit-btn");
let temperature;
function convert() {
  if (toFahrenheit.checked) {
    temperature = Number(textBox.value);
    temperature = Math.ceil((temperature * 9) / 5 + 32);
    result.textContent = temperature + "°F";
  } else if (toCelsius.checked) {
    temperature = Number(textBox.value);
    temperature = Math.ceil((temperature - 32) * (5 / 9));
    result.textContent = temperature + "°C";
  } else if (toKelvin.checked) {
    temperature = Number(textBox.value);
    temperature = Math.ceil((temperature - 32) * (5 / 9) + 273.15);
    result.textContent = temperature + "°K";
  } else if (kelvintoFahrenheit.checked) {
    temperature = Number(textBox.value);
    temperature = Math.ceil((temperature - 273.15) * (9 / 5) + 32);
    result.textContent = temperature + "°F";
  } else if (kelvinToCelsius.checked) {
    temperature = Number(textBox.value);
    temperature = Math.ceil(temperature - 273.15);
    result.textContent = temperature + "°C";
  } else if (celsiusToKelvin.checked) {
    temperature = Number(textBox.value);
    temperature = Math.ceil(temperature + 273.15);
    result.textContent = temperature + "°K";
  } else {
    result.textContent = "Select a unit";
  }
}
submitBtn.addEventListener("click", function () {
  convert();
});
