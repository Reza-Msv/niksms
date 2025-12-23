const sliderInput = document.getElementById("myRange");
const displayValue = document.getElementById("currentValue");

// تابع تبدیل اعداد انگلیسی به فارسی
const toFarsi = (num) => {
  const farsiDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
  return num.toString().replace(/\d/g, (x) => farsiDigits[x]);
};

// آپدیت کردن مقدار هنگام تغییر اسلایدر
sliderInput.addEventListener("input", (e) => {
  displayValue.textContent = toFarsi(e.target.value);
});

// مقداردهی اولیه
displayValue.textContent = toFarsi(sliderInput.value);
