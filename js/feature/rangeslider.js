const sliderInput = document.getElementById("myRange");
const displayValue = document.getElementById("currentValue");

const toFarsi = (num) => {
  const farsiDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
  return num
    .toString()
    .split("")
    .map((digit) => farsiDigits[digit])
    .join("");
};

sliderInput.addEventListener("input", (e) => {
  const correctedValue = 110 - parseInt(e.target.value);
  displayValue.textContent = toFarsi(correctedValue);
});

displayValue.textContent = toFarsi(110 - parseInt(sliderInput.value));
